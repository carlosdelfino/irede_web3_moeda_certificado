/* Small, dependency-free interactions. Content remains readable without JavaScript. */
(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-navigation');
  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.querySelector('.sr-only').textContent = 'Abrir menu';
      navigation.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.querySelector('.sr-only').textContent = open ? 'Fechar menu' : 'Abrir menu';
      navigation.classList.toggle('is-open', open);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 681px)').addEventListener('change', closeMenu);
  }

  const scene = document.querySelector('[data-parallax]');
  if (scene) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      scene.style.setProperty('--pointer-x', '0');
      scene.style.setProperty('--pointer-y', '0');
    };
    scene.addEventListener('pointermove', (event) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      const bounds = scene.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty('--pointer-x', x.toFixed(3));
        scene.style.setProperty('--pointer-y', y.toFixed(3));
      });
    }, { passive: true });
    scene.addEventListener('pointerleave', reset);
    reducedMotion.addEventListener('change', reset);
    finePointer.addEventListener('change', reset);
    if ('IntersectionObserver' in window) {
      let visible = true;
      const pauseAnimations = () => {
        scene.classList.toggle('is-paused', !visible || document.hidden);
      };
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        pauseAnimations();
      }).observe(scene);
      document.addEventListener('visibilitychange', pauseAnimations);
    }
  }

  const steps = Array.from(document.querySelectorAll('.journey-step'));
  if (steps.length) {
    const stepList = document.querySelector('.journey-steps');
    stepList.setAttribute('role', 'tablist');
    stepList.setAttribute('aria-orientation', 'vertical');
    const selectStep = (selected, focus = false) => {
      steps.forEach((step, index) => {
        const active = selected === index;
        step.classList.toggle('is-active', active);
        step.setAttribute('aria-selected', String(active));
        step.tabIndex = active ? 0 : -1;
        document.getElementById(step.getAttribute('aria-controls')).hidden = !active;
      });
      if (focus) steps[selected].focus();
    };
    steps.forEach((step, index) => {
      step.id = `journey-tab-${index}`;
      step.setAttribute('role', 'tab');
      const panel = document.getElementById(step.getAttribute('aria-controls'));
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', step.id);
      panel.tabIndex = 0;
      step.addEventListener('click', () => selectStep(index));
      step.addEventListener('keydown', (event) => {
        let next;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % steps.length;
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + steps.length - 1) % steps.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = steps.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          selectStep(next, true);
        }
      });
    });
    selectStep(0);
  }

  const contentInput = document.getElementById('certificate-content');
  if (contentInput) {
    const original = contentInput.value;
    const referenceOutput = document.getElementById('reference-hash');
    const currentOutput = document.getElementById('current-hash');
    const result = document.getElementById('hash-result');
    const resetButton = document.getElementById('reset-demo');
    if (!window.crypto?.subtle || !window.TextEncoder) {
      referenceOutput.textContent = 'Experimento disponível em HTTPS ou localhost.';
      currentOutput.textContent = 'SHA-256 requer um contexto seguro do navegador.';
      result.textContent = 'O conteúdo continua disponível. Abra o site em HTTPS para usar o laboratório.';
      contentInput.disabled = true;
    } else {
      let revision = 0;
      const hash = async (value) => {
        const buffer = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
        return Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join('');
      };
      const referencePromise = hash(original);
      const update = async () => {
        const currentRevision = ++revision;
        try {
          const [reference, current] = await Promise.all([referencePromise, hash(contentInput.value)]);
          if (currentRevision !== revision) return;
          const matches = reference === current;
          referenceOutput.textContent = reference;
          currentOutput.textContent = current;
          result.textContent = matches ? '✓ Conteúdo íntegro: os hashes coincidem.' : '↗ Conteúdo alterado: a impressão digital mudou.';
          result.classList.toggle('is-changed', !matches);
          resetButton.hidden = matches;
        } catch {
          if (currentRevision !== revision) return;
          result.textContent = 'Não foi possível calcular o hash neste navegador.';
          referenceOutput.textContent = 'Cálculo indisponível.';
          currentOutput.textContent = 'Tente novamente em um navegador atualizado.';
        }
      };
      contentInput.addEventListener('input', update);
      resetButton.addEventListener('click', () => {
        contentInput.value = original;
        update();
        contentInput.focus();
      });
      update();
    }
  }

  const toc = document.getElementById('page-toc');
  if (toc) {
    document.querySelectorAll('.prose h2').forEach((heading, index) => {
      if (!heading.id) heading.id = `secao-${index + 1}`;
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      toc.append(link);
    });
  }
  document.querySelectorAll('.prose table').forEach((table) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Tabela — role horizontalmente para explorar');
    table.before(wrapper);
    wrapper.append(table);
  });
})();
