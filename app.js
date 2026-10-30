'use strict';

// Keep these export summaries aligned with docs/services.md and index.html.
const services = {
  observe: {
    name: '360° Site Documentation',
    output: 'Organized visual walkthrough with dates and area references.',
    confirm: 'Capture areas, route, dates, viewing format and access. Visual documentation alone does not establish measurement accuracy.'
  },
  model: {
    name: 'Mobile Mapping for Revit',
    output: 'Registered point cloud for Revit modeling, with coverage and limitation notes.',
    confirm: 'Required features, dimensional tolerances, reference system, units, file format and modeling responsibility. Revit model creation is a separate scope.'
  },
  map: {
    name: 'GNSS & Photogrammetry',
    output: 'Georeferenced imagery, point clouds and scoped surfaces checked against intended-use requirements.',
    confirm: 'Coordinate framework, control, independent checkpoints, surface definition, accuracy requirements and obscured areas. Visible surfaces are not automatically bare earth.'
  },
  verify: {
    name: 'Survey-Controlled LiDAR',
    output: 'Survey-controlled spatial data from total station control and complementary LiDAR scans, with documented checks.',
    confirm: 'Critical dimensions, tolerances, control, coverage, independent verification and acceptance reviewer.'
  }
};

const serviceButtons = [...document.querySelectorAll('[data-service]')];
const servicePanels = [...document.querySelectorAll('.service-detail')];
const form = document.getElementById('brief-form');
const status = document.getElementById('brief-status');
const decisionInput = document.getElementById('decision');

function showService(id) {
  if (!Object.hasOwn(services, id)) return;
  serviceButtons.forEach(button => {
    const active = button.dataset.service === id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  servicePanels.forEach(panel => { panel.hidden = panel.id !== `detail-${id}`; });
}

serviceButtons.forEach(button => {
  button.addEventListener('click', () => showService(button.dataset.service));
});

// Reveal linked panels before normal anchor navigation, including repeated links.
document.querySelectorAll('a[href^="#detail-"]').forEach(link => {
  link.addEventListener('click', () => showService(link.hash.slice('#detail-'.length)));
});
window.addEventListener('hashchange', () => {
  if (window.location.hash.startsWith('#detail-')) {
    showService(window.location.hash.slice('#detail-'.length));
  }
});
showService('observe');
if (window.location.hash.startsWith('#detail-')) {
  showService(window.location.hash.slice('#detail-'.length));
}

document.querySelectorAll('[data-add]').forEach(link => {
  link.addEventListener('click', () => {
    const input = document.querySelector(`input[name="service"][value="${link.dataset.add}"]`);
    input.checked = true;
    status.textContent = 'Service added. Add any other services you need.';
  });
});

decisionInput.addEventListener('input', () => decisionInput.removeAttribute('aria-invalid'));

form.addEventListener('submit', event => {
  event.preventDefault();
  const selected = [...document.querySelectorAll('input[name="service"]:checked')]
    .map(input => services[input.value]);
  if (!selected.length) {
    status.textContent = 'Select at least one service to build your brief.';
    document.querySelector('input[name="service"]').focus();
    return;
  }
  const project = document.getElementById('project').value.trim();
  const decision = decisionInput.value.trim();
  if (!decision) {
    status.textContent = 'Describe the decision the information needs to support.';
    decisionInput.setAttribute('aria-invalid', 'true');
    decisionInput.focus();
    return;
  }
  const requirements = document.getElementById('requirements').value.trim();
  const lines = [
    '# 3D Services — Project Brief', '',
    `Project: ${project || 'To be confirmed'}`, '',
    '## Decision to support', decision, '',
    '## Known requirements', requirements || 'To be confirmed', '',
    '## Services to consider'
  ];
  selected.forEach(service => lines.push(
    '', `### ${service.name}`, `Output: ${service.output}`, '', `Confirm: ${service.confirm}`
  ));
  lines.push(
    '', '## Items to confirm',
    '- [ ] Included areas, critical features and coverage gaps',
    '- [ ] Deliverables, receiving software and modeling responsibility',
    '- [ ] Coordinate or local reference, units and grid/ground treatment where applicable',
    '- [ ] Tolerances, independent checks, acceptance reviewer and exceptions where applicable',
    '- [ ] Access, capture window and delivery schedule',
    '- [ ] Next scope review and person responsible',
    '', '## Scope review',
    'Confirm intended use, coverage, deliverables, schedule, access, reference requirements, accuracy and verification with the project team. This brief is a starting point, not a quote or agreed scope.',
    '', 'Accuracy depends on control, methods and verification; equipment alone does not establish accuracy.', ''
  );
  const markdown = lines.join('\n');
  document.getElementById('brief-content').textContent = markdown;
  document.getElementById('brief-preview').hidden = false;
  const url = URL.createObjectURL(new Blob([markdown], { type: 'text/markdown;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = '3d-services-project-brief.md';
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
  status.textContent = 'Brief ready. If the download does not start, open “Review or copy your brief” below.';
});

// Keep inactive controls out of the no-JavaScript experience. The full content
// and the blank Markdown template remain available without this enhancement.
document.querySelector('.service-select').hidden = false;
form.hidden = false;
