# FourServices

**See. Model. Map. Verify.** Four reality capture services, explained through the decisions they support and the information they deliver.

[View the live guide](https://christopherschaefer11-hub.github.io/FourServices/)

This repository is a portable service guide for project managers, architects, survey teams, and facility owners. It includes a responsive landing page, reusable service definitions, illustrative examples, and a Markdown project brief. Start with the decision, then choose the capture and verification needed to support it.

The services can be combined. Their numbers are navigation labels, not an accuracy ranking or a requirement to buy a sequence of packages. This is a concept framework with generic branding, no pricing, and no claim of organizational approval.

## The four services

| Service | Question to resolve | Core handoff |
| --- | --- | --- |
| **01 · 360° Site Documentation** | What is there, and what can the team see remotely? | Dated visual walkthrough with area references |
| **02 · Mobile Mapping for Revit** | What existing geometry can the modeling team work from? | Registered point cloud, agreed reference, and coverage notes |
| **03 · GNSS & Photogrammetry** | How do visible conditions fit together across the site? | Georeferenced imagery, point clouds, and scoped surfaces |
| **04 · Survey-Controlled LiDAR** | Which dimensions need verification against defined tolerances? | Controlled spatial data with independent checks and limitations |

Revit model authoring is a separate scope. Measurement accuracy must be agreed and demonstrated through the complete workflow; a service name or instrument does not establish it.

## Start here

- [Service definitions](docs/services.md): intended uses, deliverables, scope boundaries, and acceptance questions.
- [Concise examples](docs/examples.md): four illustrative applications and one combined project.
- [Project brief template](docs/project-brief-template.md): copy into a project folder, Obsidian, or a planning document.
- [Landing page source](index.html): the visual guide and local brief builder.

## Run locally

Clone or download the repository, then open `index.html` in a browser. No installation or build step is required.

For an HTTP preview, run these commands from a terminal with Git and Python 3 installed:

```sh
git clone https://github.com/christopherschaefer11-hub/FourServices.git
cd FourServices
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## Use the page

1. Explore a service, compare its output, and read the renovation example.
2. Add one or more services to the brief. Adding a service preserves previous selections.
3. Describe the decision and any known requirements, then download the Markdown brief. Use “Review or copy your brief” if the browser does not save the file.
4. Review coverage, deliverables, tolerances, control, access, schedule, and acceptance with the project team before agreeing a scope.

Entries remain in the current page and clear on reload. The application sends no form data, uses no storage or analytics, and needs no account, API key, backend, or external assets. A hosting provider may maintain its own access logs. The download is a local file, not a submitted request or quote.

Without JavaScript, every service and example remains readable and the blank brief template is downloadable. Interactive service switching and brief generation become available when JavaScript loads. Printing includes all four service descriptions.

## Publish with GitHub Pages

The repository is ready for a GitHub Pages project site. To enable branch publishing, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. The empty `.nojekyll` file keeps this a static package. All local asset and download paths are relative, so they also work beneath `/FourServices/`.

Use the address reported by GitHub after deployment. These files do not enable Pages or change repository hosting settings. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Maintain the package

| File | Purpose |
| --- | --- |
| `docs/services.md` | Detailed service definitions and scope boundaries |
| `docs/examples.md` | Clearly labeled illustrative scenarios |
| `docs/project-brief-template.md` | Reusable scoping worksheet |
| `index.html` | Page copy, comparison, examples, navigation, and form |
| `app.js` | Service switching, brief summaries, and local Markdown download |
| `styles.css` | Colors, typography, responsive behavior, and print layout |
| `assets/*.svg` | Original editable concept illustrations, not measured project data |
| `.nojekyll` | Static publishing marker |

When a service changes, update its definition in `docs/services.md`, the corresponding page and comparison text in `index.html`, and its brief summary in the `services` object in `app.js`. Keep examples consistent with the agreed scope. Review branding and delivery commitments with the responsible team before adapting this as an organization's service offering.

## Check changes

Run `node --check app.js` if Node.js is available; Node is not needed to use the page. Then check in a browser:

- All four service buttons reveal the matching panel and update their selected state.
- Keyboard focus is visible; the skip link, navigation, and form work without a mouse.
- Add two services, download a brief, and inspect the actual Markdown for both services and the entered text.
- Submit with no service or a blank decision and confirm that the page explains what to complete.
- At a narrow phone width, content and controls remain readable with no page-level horizontal scrolling.
- Disable JavaScript: all four descriptions are visible, the form is hidden, and the blank template is available.
- Print preview includes every service. Local images and the template download resolve from both the repository root and a subdirectory.

There is no dependency install, generated bundle, or CI workflow to maintain.
