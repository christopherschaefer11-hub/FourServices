'use strict';
const serviceButtons = [...document.querySelectorAll('[data-service]')];
const servicePanels = [...document.querySelectorAll('.service-detail')];
function showService(id) {
  serviceButtons.forEach(button => {
    const active = button.dataset.service === id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  servicePanels.forEach(panel => { panel.hidden = panel.id !== `detail-${id}`; });
}
serviceButtons.forEach(button => button.addEventListener('click', () => showService(button.dataset.service)));
showService('observe');
document.querySelectorAll('[data-add]').forEach(link => link.addEventListener('click', () => {
  const input = document.querySelector(`input[name="service"][value="${link.dataset.add}"]`);
  input.checked = true;
  document.getElementById('brief-status').textContent = 'Service added. Add any other services you need.';
}));
const services = {
  observe: { name: '360° Site Documentation', output: 'Organized visual walkthrough with dates and area references.', confirm: 'Capture areas, route, dates, viewing format and access.' },
  model: { name: 'Mobile Mapping for Revit', output: 'Registered point cloud for Revit modeling, with coverage and limitation notes.', confirm: 'Required features, dimensional tolerances, reference system, file format and modeling responsibility. Revit model creation is a separate scope.' },
  map: { name: 'GNSS & Photogrammetry', output: 'Georeferenced imagery, point clouds and surfaces checked against intended-use requirements.', confirm: 'Coordinate framework, control, independent checkpoints, surface coverage, accuracy requirements and obscured areas.' },
  verify: { name: 'Survey-Controlled LiDAR', output: 'Survey-controlled spatial data from total station control and complementary LiDAR scans, with documented checks.', confirm: 'Critical dimensions, tolerances, control, coverage and independent verification.' }
};
document.getElementById('brief-form').addEventListener('submit', event => {
  event.preventDefault();
  const selected = [...document.querySelectorAll('input[name="service"]:checked')].map(input => services[input.value]);
  const status = document.getElementById('brief-status');
  if (!selected.length) { status.textContent = 'Select at least one service to build your brief.'; document.querySelector('input[name="service"]').focus(); return; }
  const project = document.getElementById('project').value.trim();
  const decision = document.getElementById('decision').value.trim();
  if (!decision) { status.textContent = 'Describe the decision the information needs to support.'; document.getElementById('decision').focus(); return; }
  const requirements = document.getElementById('requirements').value.trim();
  const lines = ['# 3D Services — Project Brief', '', `Project: ${project || 'To be confirmed'}`, '', '## Decision to support', decision, '', '## Known requirements', requirements || 'To be confirmed', '', '## Services to consider'];
  selected.forEach(service => lines.push('', `### ${service.name}`, `Output: ${service.output}`, '', `Confirm: ${service.confirm}`));
  lines.push('', '## Scope review', 'Confirm intended use, coverage, deliverables, schedule, access, coordinate requirements, accuracy and verification with the project team. This brief is a starting point, not a quote or agreed scope.', '', 'Accuracy depends on control, methods and verification; equipment alone does not establish accuracy.', '');
  const url = URL.createObjectURL(new Blob([lines.join('\n')], {type:'text/markdown;charset=utf-8'}));
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = '3d-services-project-brief.md'; document.body.append(anchor); anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
  status.textContent = 'Brief downloaded. Share it with your project team.';
});
