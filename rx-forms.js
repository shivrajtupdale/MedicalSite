// Tab switching
const tabs = document.querySelectorAll('.form-tab');
const sections = document.querySelectorAll('.form-section');

function activateTab(target) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.target === target));
  sections.forEach(s => s.classList.toggle('active', s.id === target));
  window.scrollTo({ top: document.querySelector('.form-tabs-nav').offsetTop - 90, behavior: 'smooth' });
}

tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab.dataset.target)));

// Activate tab from URL hash
const hash = window.location.hash.replace('#', '');
if (hash && document.getElementById(hash)) activateTab(hash);

// Add medication row — Transfer
document.getElementById('addRx')?.addEventListener('click', () => {
  const entry = document.createElement('div');
  entry.className = 'rx-entry';
  entry.innerHTML = `
    <div class="form-row" style="margin-top:12px">
      <div class="form-group">
        <label>Medication Name</label>
        <input type="text" placeholder="e.g. Atorvastatin 20mg" />
      </div>
      <div class="form-group">
        <label>Rx Number (if known)</label>
        <input type="text" placeholder="e.g. 1234567" />
      </div>
      <button type="button" class="remove-rx" title="Remove"><i class="fas fa-times"></i></button>
    </div>`;
  document.getElementById('rxList').appendChild(entry);
  entry.querySelector('.remove-rx').addEventListener('click', () => entry.remove());
});

// Add medication row — Refill
document.getElementById('addRefill')?.addEventListener('click', () => {
  const entry = document.createElement('div');
  entry.className = 'rx-entry';
  entry.innerHTML = `
    <div class="form-row" style="margin-top:12px">
      <div class="form-group">
        <label>Medication Name</label>
        <input type="text" placeholder="e.g. Metformin 500mg" />
      </div>
      <div class="form-group">
        <label>Rx Number</label>
        <input type="text" placeholder="Found on your bottle label" />
      </div>
      <button type="button" class="remove-rx" title="Remove"><i class="fas fa-times"></i></button>
    </div>`;
  document.getElementById('refillList').appendChild(entry);
  entry.querySelector('.remove-rx').addEventListener('click', () => entry.remove());
});

// Form submit handler
['transferForm', 'refillForm', 'newPatientForm'].forEach(id => {
  document.getElementById(id)?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '✓ Submitted Successfully!';
    btn.style.background = '#16a34a';
    btn.style.borderColor = '#16a34a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      e.target.reset();
    }, 4000);
  });
});
