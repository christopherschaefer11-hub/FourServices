# The four services

Choose by the decision and the required deliverable. A project may use one service or combine several. The four labels describe different jobs; they do not promise progressively higher accuracy.

| Service | Primary purpose | Typical output |
| --- | --- | --- |
| [01 · 360° Site Documentation](#01--360-site-documentation) | See and discuss visible conditions | Dated visual walkthrough |
| [02 · Mobile Mapping for Revit](#02--mobile-mapping-for-revit) | Supply geometry for modeling | Registered point cloud |
| [03 · GNSS & Photogrammetry](#03--gnss--photogrammetry) | Understand visible site conditions in a coordinate framework | Georeferenced imagery and surfaces |
| [04 · Survey-Controlled LiDAR](#04--survey-controlled-lidar) | Verify critical geometry against agreed requirements | Controlled spatial data and documented checks |

The handoffs below are a starting point for scope development. Confirm each project's coverage, formats, verification, and acceptance before capture. Examples are in [examples.md](examples.md); use the [brief template](project-brief-template.md) to record decisions.

## 01 · 360° Site Documentation

**Question:** What is there, and how can the team revisit it without another group site visit?

Organized 360° video and imagery provide a shared visual record of accessible, visible conditions. Use this for remote coordination, facility orientation, and progress documentation.

**Typical handoff**

- A dated visual walkthrough organized by building, level, area, or route.
- An agreed viewing format and area index so another person can find the relevant location.
- Observation notes and a record of inaccessible or missed areas, when included in the scope.

**Agree before capture:** Areas, route, capture dates, lighting and access, required annotations, viewer access, retention, and any repeat visits.

**Scope boundary:** Visual documentation alone does not establish reliable measurement accuracy. Hidden conditions, a technical condition assessment, dimensional verification, and model creation require separate scope.

**Acceptance question:** Can the intended recipient find and view each agreed area, identify its capture date, and understand the coverage gaps?

**Example:** A facility manager shares a walkthrough before a renovation meeting so the designer and maintenance team can discuss the same rooms and visible equipment.

## 02 · Mobile Mapping for Revit

**Question:** What existing geometry does the modeling team need to work from?

Mobile LiDAR capture provides a registered point cloud of agreed spaces, with a documented reference and known limitations. Use it to support renovation planning, existing-condition modeling, and facility coordination.

**Typical handoff**

- A registered point cloud covering the scoped spaces and features.
- An agreed file format and coordinate or local reference, including units and orientation.
- Coverage, registration, and limitation notes, plus the checks agreed for the intended use.

**Agree before capture:** Required features, dimensional tolerances, access, obstructions, file sizes, software versions, reference alignment, and who will convert, import, and model the data. Test the receiving workflow with a sample when compatibility is uncertain.

**Scope boundary:** A point cloud is a reference for modeling. Revit model authoring, families, feature classification, and model detail are separate deliverables. Mobile capture does not automatically satisfy a critical connection tolerance or reveal concealed geometry.

**Acceptance question:** Can the receiving team open the handoff in its agreed workflow, place it correctly, and identify both usable coverage and areas requiring verification?

**Example:** An architect uses the point cloud of an existing community center to develop the renovation model. The model authoring and any critical tie-in checks are scoped separately.

## 03 · GNSS & Photogrammetry

**Question:** How do the visible conditions fit together across the site?

GNSS-supported photogrammetry connects imagery and derived geometry to an agreed coordinate framework. Use it for site alternatives, visible terrain interpretation, and scoped quantity analysis.

**Typical handoff**

- Georeferenced imagery, such as an orthomosaic when scoped.
- A point cloud and agreed surface products for the requested area.
- Control and independent checkpoint results, capture date, coverage, and limitations.

**Agree before capture:** Site extent, access and collection method, coordinate reference and units, required features, control, independent checkpoints, accuracy acceptance, and the meaning of each surface. For quantities, also agree the base surface, limits, exclusions, and calculation method.

**Scope boundary:** A visible surface may include vegetation or structures; it is not automatically a bare-earth model. Obscured areas may require supplemental capture. The service does not establish property boundaries. Any intended accuracy must be demonstrated with suitable independent checks, rather than inferred from a label such as “near survey grade.”

**Acceptance question:** Are the reference system, surface definition, coverage, and independent results sufficient for the stated planning or quantity decision?

**Example:** A project team compares accessible route alternatives across the community center grounds using current imagery and checked surface data, with vegetated gaps identified for follow-up.

## 04 · Survey-Controlled LiDAR

**Question:** Which dimensions must be verified before the team can rely on them?

Total station control and complementary LiDAR capture are planned around critical features, defined tolerances, and independent verification. Use this for detailed design inputs, critical clearances, and existing-to-new connections.

**Typical handoff**

- Survey-controlled point clouds in the agreed reference framework.
- The specific geometry, features, or dimensional checks named in the scope.
- Control, verification results, coverage, and documented limitations.

**Agree before capture:** Critical dimensions, allowable uncertainty, control, units and reference transformations, scan coverage, independent check methods, deliverable format, responsible review, and how failed checks will be resolved.

**Scope boundary:** The equipment combination does not itself establish an accuracy level. Verification applies to the features and conditions actually checked. Fabrication release, construction layout, boundary work, and professional certifications are separate scopes when required; they are not implied by this service name.

**Acceptance question:** Do the independent results meet the agreed criteria for each critical feature, with any exceptions explicitly resolved before use?

**Example:** Before an addition is detailed, the team checks the existing corridor connection and agreed critical elevations against the project tolerance, then records the results and any gaps.

## Common scope decisions

Resolve these with the receiving team before choosing equipment or promising a handoff:

1. **Decision and intended use:** Who will use the information, and for what action?
2. **Coverage:** Which areas and features are included, inaccessible, or explicitly excluded?
3. **Deliverables:** Which files, units, software versions, and level of interpretation are needed?
4. **Reference:** Local or georeferenced; horizontal and vertical reference, units, transformations, and grid/ground treatment as applicable.
5. **Acceptance:** Required tolerances, check method, reporting, reviewer, and treatment of exceptions.
6. **Delivery:** Access, schedule, receiving workflow, and responsibility for modeling or supplemental work.

Start with the smallest combination that supports the decision. Add coverage or verification where the consequences of an error justify it.
