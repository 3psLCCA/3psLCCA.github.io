# 3psLCCA User Guide

![Main Logo](logo/logo-3psLCCA-light.png)

> **Version:** 2026.04.1 | **Developed at:** Osdag, FOSSEE, IIT Bombay | **Supported by:** ConstructSteel, Ministry of Steel, INSDAG

---

## Introduction

**3psLCCA** is a desktop application for evaluating the life cycle cost of bridges across the initial, use, and end-of-life stages. It accounts for a comprehensive range of costs, including construction, inspection, maintenance, traffic disruptions, demolition, recycling, and other associated costs. The software is based on the **3PS-LCC** (Three Pillars of Sustainability Life Cycle Cost Assessment) framework which integrates these costs into a single monetary metric while capturing the economic, environmental, and social dimensions of sustainability throughout the bridge life cycle.

LCCA evaluates the total cost of a bridge across its entire service life - not just initial construction, but maintenance, repair, demolition, recycling, and associated environmental and social costs. All costs are brought to a common present-day value using discounting, allowing direct comparison of different design alternatives.

The analysis is structured around **three pillars of sustainability**:

![Sustainability Components](documentation_images/sustainablity_pillars.png)

- **Economic** - direct monetary costs: construction, maintenance, demolition
- **Social** - road user costs: delays, accident costs, and detour expenses incurred during construction and maintenance activities
- **Environmental** - carbon emission costs across the bridge life cycle

This guide uses a single example project throughout: a **2-lane RCC T-Girder road bridge** over the Sone River on a state highway in Bihar. This is a straightforward, commonly built bridge type - suitable for demonstrating all features of the application without introducing complexity specific to long-span or special structures. All field values, quantities, and screenshots in this guide refer to this project.

**Coverage:**

1. Launching the application and the Home screen
2. Creating and opening projects
3. Comparing projects
4. General Information and Bridge Data input
5. Construction Work Data (Foundation, Sub Structure, Super Structure, Miscellaneous)
6. Financial, Traffic, Maintenance, Demolition, and Carbon Emission parameters
7. Running the analysis and interpreting results
8. Generating a PDF report

> Technical terms are defined inline at their first occurrence throughout this guide.

---

## A - Home Screen, New Project, Open, and Compare

### A.1 Launching the Application

Activate the conda environment and launch the application from the terminal:

```bash
conda activate 3psLCCA
threePSLCCA
```

A splash screen is displayed while the application loads its material databases and configuration.

![Splash Screen](documentation_images/partA/01_splash_screen.png)

---

### A.2 The Home Screen

The Home Screen is the first screen you see after the app loads. It is divided into three structural areas: the **Left Sidebar**, the **Top Bar**, and the **Main Content Area**.

<!-- ============================================================
IMAGE PLACEHOLDER - A.2
File: documentation_images/partA/02_home_screen_annotated.png

HOW TO CAPTURE:
- Launch the app with at least one existing project visible
- Full window screenshot (include window titlebar)

HOW TO ANNOTATE:
- Use filled blue circles (⬤ #2563EB, white number inside) for all callouts
- ① Draw a tall rectangular blue box (#2563EB, 2px) enclosing the entire left sidebar strip
  Label outside the box to the right: "① Left Sidebar"
  Arrow: horizontal arrow from label pointing left into the sidebar box
- ② Draw a rectangular blue box along the top bar (from window title to right edge)
  Label above: "② Top Bar - project filter controls and search"
  Arrow: downward arrow from label into the bar
- ③ Draw a rectangular blue box around the entire main content area (project cards region)
  Label: "③ Main Content Area - project cards"
  Arrow: arrow pointing into the card grid
- Do NOT annotate individual buttons or text within - that is done in subsequent screenshots
============================================================ -->

![Home Screen - Overview](documentation_images/partA/02_home_screen_annotated.png)

---

#### A.2.1 Left Sidebar

The left sidebar is fixed and visible on every screen in the application. It contains five navigation buttons, each leading to a distinct area.

![Left Sidebar - Annotated](documentation_images/partA/03_sidebar_annotated.png)

| Button | Action |
|--------|--------|
| **Home** | Returns to the project dashboard from anywhere in the app |
| **New** | Opens the New Project dialog |
| **Open** | Opens a file browser to load an existing `.3psLCCA` project file |
| **Compare** | Opens the project comparison view |
| **Settings** | Opens application preferences and agency profile management |

---

#### A.2.2 Top Bar and Project Views

The toolbar sits between the greeting area and the project grid. It contains a **dynamic section label**, a **refresh button**, a **search field**, and **four view filter buttons** - Recent, All, Starred, and Compare. The section label updates automatically to reflect the active view.

![Top Bar - Annotated](documentation_images/partA/04_topbar_annotated.png)

| Button | Section Label shown | What is listed |
|--------|---------------------|----------------|
| **Recent** | RECENT PROJECTS | All projects, sorted by last opened or last modified - most recent first |
| **All** | ALL PROJECTS - A-Z | All projects, sorted alphabetically by name |
| **Starred** | STARRED PROJECTS | Only projects you have starred (pinned). If none are starred, shows an empty state with instructions. |
| **Compare** | READY TO COMPARE | Only projects that have been fully calculated and locked. Enables multi-select mode for loading into the Compare view. |

The **search field** applies on top of whichever view is active - typing filters the current list in real time and changes the section label to `RESULTS FOR "..."`.

Each view is shown individually below.

##### Recent View

![View - Recent](documentation_images/partA/04a_view_recent.png)

##### All View

![View - All](documentation_images/partA/04b_view_all.png)

##### Starred View

![View - Starred](documentation_images/partA/04c_view_starred.png)

##### Compare View

<!-- Will do later -->
<!-- ![View - Compare](documentation_images/partA/04d_view_compare.png) -->

> Projects appear in the Compare view only if they have been fully calculated and locked. A project that is still in progress will not appear here.

---

#### A.2.3 Project Cards

Each project in the list is shown as a card in the main content area.

![Project Card - Annotated](documentation_images/partA/05_project_card_annotated.png)

Each card shows:

- **Project name**
- **Last modified** - relative timestamp ("2 hours ago", "Yesterday")
- **Status badge**:

| Badge | Meaning |
|-------|---------|
| `OK` | Project is intact and ready to open |
| `Open` | Project is currently open in another window |
| `Needs Recovery` | Project was not closed cleanly; app will attempt recovery on open |
| `Corrupted` | Project file is unreadable and cannot be opened |

---

### A.3 Creating a New Project

Click **New** in the sidebar, or the **+ New Project** button on the Home Screen. The New Project dialog opens.

![New Project Dialog](documentation_images/partA/06_new_project_dialog.png)

| Field | Required | Behaviour |
|-------|----------|-----------|
| **Project Name** | Yes | Free text. Can be edited later in the General Information section. |
| **Country** | Yes | Selects the material rate database and regional standards. **Locked after creation.** |
| **Currency** | Auto | Auto-filled when Country is selected. All monetary values across the project use this currency. **Locked after creation.** |
| **Unit System** | Yes | `Metric (SI)`: metres and kilograms. `Imperial (English)`: feet and pounds. **Locked after creation.** |

> Country, Currency, and Unit System cannot be changed after the project is created because every cost calculation, unit conversion, and material rate lookup in the project depends on them. Changing them mid-project would produce inconsistent results across all sections.

**Values used in this guide:**

```
Project Name : Sone River Road Bridge
Country      : India
Currency     : INR
Unit System  : Metric (SI)
```

Click **Create**. The app initialises the project and opens the project workspace.

---

### A.4 Opening an Existing Project

**From the Home Screen:** Click any project card. The project opens immediately.

**From disk:** Click **Open** in the sidebar. A file browser opens - navigate to the `.3psLCCA` file and select it.

![Open File Browser](documentation_images/partA/07_open_file_browser.png)

> A `.3psLCCA` file is a self-contained project archive. It holds all input data, results, and checkpoints for a single project. It can be copied, moved, or shared like any other file.

---

### A.5 Comparing Projects

The Compare view places two or more projects side by side, showing a breakdown of their life cycle costs. This is the primary tool for evaluating design alternatives against each other - for example, a concrete box girder bridge versus a cable-stayed bridge at the same location.

> Only projects that have been fully calculated (via the **Calculate** button) produce data in the comparison view.

#### A.5.1 Opening the Compare View

Click **Compare** in the sidebar.

<!-- ============================================================
IMAGE PLACEHOLDER - A.5.1
File: documentation_images/partA/08_compare_empty.png

HOW TO CAPTURE:
- Click Compare in the sidebar before any projects are loaded into comparison
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the project selector / "Add Project" control
  Label: "① Select projects to compare"
- ② If an empty-state illustration or message is shown in the centre, draw a blue box
  Label: "② No projects loaded yet"
============================================================ -->

![Compare - Empty](documentation_images/partA/08_compare_empty.png)

#### A.5.2 Loading Projects and Reading the Comparison Table

Add projects using the selector at the top of the Compare view. The table populates once at least two calculated projects are loaded.

<!-- ============================================================
IMAGE PLACEHOLDER - A.5.2
File: documentation_images/partA/09_compare_loaded.png

HOW TO CAPTURE:
- Load two or more calculated projects into the Compare view
- Full window screenshot showing the populated comparison table

HOW TO ANNOTATE:
- ① Draw a rectangular blue box along the top row containing project name headers
  Label: "① Project columns - one per project"
- ② Draw a rectangular blue box around one complete cost row
  (e.g. the "Initial Construction Cost" row)
  Label: "② Cost item row"
- ③ Draw a rectangular blue box around the grand total / LCCA total row at the bottom
  Label: "③ Total Life Cycle Cost (present value)"
- ④ If a bar chart or pie chart is visible, draw a rectangular blue box around it
  Label: "④ Visual cost breakdown"
- ⑤ Draw a rectangular blue box around the Add / Remove project controls
  Label: "⑤ Add or remove projects"
============================================================ -->

![Compare - Loaded](documentation_images/partA/09_compare_loaded.png)

Each column in the table corresponds to one project. Each row is a cost category. The **Total Life Cycle Cost** row at the bottom is the single number used to compare alternatives.

---

### A.6 Settings

Click **Settings** in the sidebar. The Settings dialog opens as a modal window with two tabs: **General** and **Profiles**.

#### A.6.1 General Tab

The General tab controls display name and appearance.

![Settings - General Tab](documentation_images/partA/10_settings_general.png)

| Field | Description |
|-------|-------------|
| **Display Name** | Your name as it will appear in generated reports. |
| **Appearance Mode** | `Auto` follows the OS light/dark setting. `Light` and `Dark` override it. |
| **Light Theme** | Colour scheme used when in light mode. |
| **Dark Theme** | Colour scheme used when in dark mode. |

> Theme changes take effect immediately on clicking **Save**.

#### A.6.2 Profiles Tab

The Profiles tab stores agency details - name, logo, address, and contact information - that can be reused across projects.

![Settings - Profiles Tab](documentation_images/partA/11_settings_profiles.png)

| Element | Description |
|---------|-------------|
| **Avatar** | Displays the first letter of the profile name, or the uploaded logo. Click to upload a PNG/JPG. |
| **Profile selector** | Dropdown listing all saved profiles. Select `+ New Profile` to create one. |
| **Delete Profile** | Permanently removes the selected profile from local storage. |
| **Form fields** | Assessor's name, organisation name, logo, address, country, email, phone. |

> Profiles are stored locally on the machine - not inside any project file. To populate a project's General Information section with a saved profile, use **Load Agency Profile** inside that project.

---

### A.7 Frequently Asked Questions

**Q: Can I rename a project after creation?**
Yes. The Project Name field in the **General Information** section is editable at any time. Country, Currency, and Unit System cannot be changed.

**Q: What happens if I open a project that is already open in another window?**
The app detects this and shows an `Open` status badge on the project card. Opening it again will prompt you to confirm.

**Q: The app shows "Needs Recovery" on my project. Is data lost?**
Not necessarily. This badge appears when the project was not closed cleanly (e.g. a crash or force-quit). Open the project - the app will attempt to recover the last saved state automatically. Check your data after recovery and use a Checkpoint if anything looks incorrect.

**Q: I cannot find my project on the Home Screen.**
Use the **Search bar** - type any part of the project name. Alternatively, use **Open** to browse directly to the `.3psLCCA` file on disk.

**Q: Can I share a project file with a colleague?**
Yes. Copy the `.3psLCCA` file and send it. Your colleague can open it using **Open** in their installation of 3psLCCA. All data, inputs, and results are embedded in the single file.

**Q: Compare shows zero values for one of my projects.**
The Compare tool only shows data for projects that have been calculated. Open the project, complete all required inputs, and click **Calculate** to generate results before comparing.

---



## B: Project Workspace and Basic Data Entry

After creating or opening a project, the project workspace opens. This is the main working environment where all project data is entered, edited, and calculated.

---

### B.1 The Project Workspace Layout

The workspace follows a consistent three-zone layout that persists across all data entry pages.

<!-- ============================================================
IMAGE PLACEHOLDER - B.1
File: documentation_images/partB/01_workspace_overview.png

HOW TO CAPTURE:
- Create the example project (Sone River Road Bridge) and open it
- Take a full window screenshot showing the project workspace
- General Information page should be active (it's the first page)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the entire left sidebar
  Label: "① Navigation menu - access all data sections"
- ② Draw a rectangular blue box around the top header bar
  Label: "② Project header - name, status, action buttons"
- ③ Draw a rectangular blue box around the main content area
  Label: "③ Data entry area - forms, tables, and inputs"
- Use arrows pointing from labels outward to their respective zones
============================================================ -->

![Project Workspace Overview](documentation_images/partB/01_workspace_overview.png)

#### B.1.1 Left Navigation Menu

The left sidebar provides access to all project data sections.

<!-- ============================================================
IMAGE PLACEHOLDER - B.1.1
File: documentation_images/partB/02_left_navigation.png

HOW TO CAPTURE:
- Crop tightly to just the left sidebar navigation menu
- Height should include all menu items from top to bottom

HOW TO ANNOTATE:
- Draw rectangular blue boxes around each menu item, numbered ① to ⑩:
  ① "General Information"
  ② "Bridge Data"
  ③ "Construction Work Data"
  ④ "Financial Data"
  ⑤ "Traffic and Road Data"
  ⑥ "Maintenance Data"
  ⑦ "Demolition Data"
  ⑧ "Carbon Emission"
  ⑨ "Recycling"
  ⑩ "Results"
- For items ③ and ⑧, add a small note: "Has sub-menus"
============================================================ -->

![Left Navigation Menu](documentation_images/partB/02_left_navigation.png)

| Menu Item | Purpose | Sub-pages |
|-----------|---------|-----------|
| **General Information** | Project metadata, agency details, basic settings | - |
| **Bridge Data** | Technical specifications, location, life cycle | - |
| **Construction Work Data** | Material quantities and costs for structural components | Foundation, Sub Structure, Super Structure, Misc |
| **Financial Data** | Economic parameters (discount rate, inflation, interest) | - |
| **Traffic and Road Data** | Traffic volume, accident rates, road parameters | - |
| **Maintenance Data** | Routine, periodic, and major maintenance schedules | - |
| **Demolition Data** | End-of-life costs and duration | - |
| **Carbon Emission** | Carbon footprint calculations | Material, Transportation, Machinery, Traffic Diversion, Social Cost |
| **Recycling** | Material recyclability and recovered value | - |
| **Results** | LCCA calculation results and comparison charts | - |

> The active page is highlighted in the menu. All menu items remain clickable at all times.

#### B.1.2 Project Header Bar

The top bar shows project identification and primary action buttons.

<!-- ============================================================
IMAGE PLACEHOLDER - B.1.2
File: documentation_images/partB/03_project_header.png

HOW TO CAPTURE:
- Crop to just the header bar area (top of window, full width)
- Include project name, status indicator, and buttons

HOW TO ANNOTATE:
- ① Blue arrow pointing to the project name text
  Label: "① Project name"
- ② Blue arrow pointing to the status indicator (dot or icon)
  Label: "② Status - unsaved changes / saved / calculated"
- ③ Draw a rectangular blue box around the "Save" button
  Label: "③ Save checkpoint"
- ④ Draw a rectangular blue box around the "Calculate" button
  Label: "④ Run LCCA analysis"
- ⑤ If visible, draw a rectangular blue box around the "Report" button
  Label: "⑤ Generate PDF report"
============================================================ -->

![Project Header Bar](documentation_images/partB/03_project_header.png)

| Element | Description |
|---------|-------------|
| **Project name** | Display name of the current project. Click to edit. |
| **Status indicator** | Visual indicator of project state: white dot (unsaved), green check (saved), lock icon (calculated and locked). |
| **Save** | Creates a checkpoint. Saves all current data to the project file. |
| **Calculate** | Validates all inputs and runs the LCCA computation. Required before viewing Results or Compare. |
| **Report** | Generates a PDF report (available after calculation). |

---

### B.2 General Information

Click **General Information** in the left navigation menu. This page captures project metadata and agency details.

<!-- ============================================================
IMAGE PLACEHOLDER - B.2
File: documentation_images/partB/04_general_info_overview.png

HOW TO CAPTURE:
- Navigate to General Information page
- Full window screenshot
- If agency profile fields are empty, fill in example values first

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Project Information" section
  Label: "① Project Information"
- ② Draw a rectangular blue box around the "Evaluating Agency" section
  Label: "② Evaluating Agency"
- ③ Draw a rectangular blue box around the "Reviewed By" section
  Label: "③ Reviewed By"
- ④ Draw a rectangular blue box around the "Project Settings" section
  Label: "④ Project Settings - locked at creation"
- ⑤ Draw a rectangular blue box around the "Load Agency Profile" button
  Label: "⑤ Load saved profile"
============================================================ -->

![General Information Overview](documentation_images/partB/04_general_info_overview.png)

#### B.2.1 Project Information

| Field | Editable | Description |
|-------|----------|-------------|
| **Project Name** | Yes | Display name used in reports and project listings. |
| **Project Code** | Yes | Internal reference code or contract number. |
| **Description** | Yes | Brief narrative description of the project. |
| **Remarks** | Yes | Additional notes, assumptions, or special conditions. |

#### B.2.2 Evaluating Agency

This section auto-populates when **Load Agency Profile** is clicked (if a profile was saved in Settings).

| Field | Description |
|-------|-------------|
| **Agency Logo** | PNG or JPG image. Appears on the cover page of generated reports. |
| **Agency Name** | Full legal name of the evaluating organisation. |
| **Contact Person** | Name of the primary assessor or engineer. |
| **Address** | Physical address of the agency. |
| **Country** | Country where the agency is based. |
| **Email** | Contact email address. |
| **Phone** | Contact phone number. |

#### B.2.3 Reviewed By

| Field | Description |
|-------|-------------|
| **Name** | Reviewer or approver name. |
| **Organization** | Reviewer's organisation. |
| **Address** | Reviewer's address. |
| **Country** | Reviewer's country. |
| **Email** | Reviewer's email. |
| **Phone** | Reviewer's phone. |

#### B.2.4 Project Settings

These fields are set at project creation and **cannot be changed**.

| Field | Description |
|-------|-------------|
| **Project Country** | Determines the material rate database and regional standards. |
| **Project Currency** | All monetary values use this currency. |
| **Unit System** | `Metric (SI)` or `Imperial (English)`. Affects all length and weight inputs. |
| **Material Suggestions** | Toggle auto-suggestions from the built-in material database. |

---

### B.3 Bridge Data

Click **Bridge Data** in the left navigation menu. This page captures the technical specifications and physical characteristics of the bridge.

<!-- ============================================================
IMAGE PLACEHOLDER - B.3
File: documentation_images/partB/05_bridge_data_overview.png

HOW TO CAPTURE:
- Navigate to Bridge Data page
- Fill in example values for the Sone River Road Bridge:
    Name of the Bridge: Sone River Road Bridge
    Owner: [Example State PWD or similar]
    Type of Bridge: Girder
    Span: 45 (metres)
    Carriageway Width: 7.5 (metres)
    Number of Lanes: 2
    Vehicle Path Direction: Two Way
    Footpath: No footpath (or Footpath at one side)
    Design Life: 50 (years)
    Year of Construction: 2024 (or current year)
    Duration of Construction: 18 (months)
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Bridge Identification" section
  Label: "① Bridge Identification"
- ② Draw a rectangular blue box around the "Location" section
  Label: "② Location"
- ③ Draw a rectangular blue box around the "Technical Specifications" section
  Label: "③ Technical Specifications"
- ④ Draw a rectangular blue box around the "Life Cycle" section
  Label: "④ Life Cycle"
- ⑤ Draw a rectangular blue box around the "Construction Schedule" section
  Label: "⑤ Construction Schedule"
- ⑥ Draw a rectangular amber box around the "Clear All" button
  Label: "⑥ Clear All - resets all fields"
============================================================ -->

![Bridge Data Overview](documentation_images/partB/05_bridge_data_overview.png)

#### B.3.1 Bridge Identification

| Field | Description |
|-------|-------------|
| **Name of the Bridge** | Official name of the bridge structure. |
| **Owner** | Name of the owner, client, or responsible agency. |

#### B.3.2 Location

| Field | Description |
|-------|-------------|
| **Country** | Auto-filled from project creation. Locked. |
| **Bridge Alignment & Location** | Description of start point, end point, crossed feature (river, valley, railway), and nearby landmarks. |

#### B.3.3 Technical Specifications

| Field | Description | Typical Range |
|-------|-------------|---------------|
| **Type of Bridge** | Structural classification. Options: Girder, Arch, Cable-Stayed, Suspension, Truss, Box Girder, Slab, Other. | - |
| **Span** | Total span length between supports. | 20–500 m (girder bridges typically 30–100 m) |
| **Carriageway Width** | Clear width of the roadway portion. | 3.5–15 m |
| **Number of Lanes** | Total traffic lanes. | 1–8 |
| **Vehicle Path Direction** | One Way or Two Way traffic flow. | - |
| **Footpath** | Pedestrian provision: No footpath / Footpath at one side / Footpath at both sides. | - |

> **Validation warnings:** The app highlights unusual values. Span > 5000 m, carriageway width < 1.5 m or > 50 m, or lanes > 16 trigger verification prompts.

#### B.3.4 Life Cycle

| Field | Description | Typical Value |
|-------|-------------|---------------|
| **Design Life** | Expected operational service life in years. | 50–100 years |
| **Year of Construction** | Year of construction (past or future). | Current year or future |

> **Validation:** Year of Construction before the current year triggers a warning to verify the input is intentional.

#### B.3.5 Construction Schedule

| Field | Description | Typical Value |
|-------|-------------|---------------|
| **Duration of Construction** | Total construction time in months. | 6–48 months |
| **Working Days per Month** | Assumed working days for scheduling. Default: 22 | 20–26 days |
| **Days per Month** | Days per month the road traffic is affected. Default: 30 | 29–31 days |

> **Cross-field validation:** Working Days per Month cannot exceed Days per Month. If violated, a warning appears on the Working Days field.

---

## C - Construction Work Data

The Construction Work Data page captures the **bill-of-quantities style material inputs** used to compute the **initial construction cost** of the bridge. Data is organised into four tabs aligned to typical bridge construction categories: **Foundation**, **Sub-Structure**, **Super-Structure**, and **Miscellaneous**.

Each tab contains **component sections** (e.g., *Pile Cap*, *Pier*, *Girder*) with a material table under each component. Materials can be entered manually or imported from an Excel template. Items moved to Trash are excluded from calculations until restored.

---

### C.1 Overview of the Construction Work Data page

Open **Construction Work Data** from the left navigation menu. The page contains:

- A top header area labelled **Construction Works Data**
- Action buttons: **Import Excel**, **Export Excel**, and **Trash** (shows a count when items exist in Trash)
- A tab bar for **Foundation**, **Sub-Structure**, **Super-Structure**, and **Miscellaneous**

<!-- ============================================================
IMAGE PLACEHOLDER - C.1
File: documentation_images/partC/01_construction_work_data_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Construction Work Data
- Ensure at least 1 material exists in any tab so the summary bar shows real totals
- Full window screenshot (include window titlebar)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Import Excel and Export Excel buttons
  Label: "① Excel import/export - bulk entry and template-based updates"
- ② Draw a rectangular blue box around the Trash button
  Label: "② Trash - excluded items (count shown when non-empty)"
- ③ Draw a rectangular blue box around the tab bar (Foundation/Sub-Structure/Super-Structure/Miscellaneous)
  Label: "③ Tabs - structural categories"
- ④ Draw a rectangular blue box around the per-tab summary bar (Total + Items)
  Label: "④ Summary - tab total cost and item count"
============================================================ -->

![Construction Work Data - Overview](documentation_images/PartC/01_construction_work_data_overview.png)

#### C.1.1 Tab summary bar

Each tab shows a summary bar at the top with:

- **Total (Currency)** - sum of \(Quantity \times Rate\) for all active (non-trashed) materials in the current tab
- **Items** - number of active (non-trashed) material rows in the current tab

> Items in Trash are excluded from both Total and Items.

---

### C.2 Foundation tab

Open the **Foundation** tab. A component section is displayed for each foundation component. By default, a new project includes these Foundation components:

- **Excavation**
- **Pile**
- **Pile Cap**

Each component section contains:

- A materials table
- A button **Add Material to \<Component\>**
- A button **Delete Component**

<!-- ============================================================
IMAGE PLACEHOLDER - C.2
File: documentation_images/partC/02_foundation_tab_layout.png

HOW TO CAPTURE:
- In Construction Work Data, open the Foundation tab
- Ensure all default components are visible (Excavation, Pile, Pile Cap)
- Add at least one material row in any one component so the table is populated
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around one entire component block (component title + table + buttons)
  Label: "① Component section - materials grouped by structural component"
- ② Draw a rectangular blue box around the "Add Material to ..." button in that component
  Label: "② Add Material - opens the material entry dialog"
- ③ Draw a rectangular blue box around the Action column region on the right side of the table
  Label: "③ Row actions - Edit and Move to trash"
============================================================ -->

![Foundation Tab - Layout](documentation_images/PartC/02_foundation_tab_layout.png)

#### C.2.1 Materials table (per component)

Each component table uses the same columns:

| Column | Meaning |
|--------|---------|
| **Work Name** | Material name as entered in the Material dialog |
| **Quantity** | Quantity value entered in the Material dialog |
| **Unit** | Unit selected in the Material dialog |
| **Rate/Unit (Currency)** | Unit rate entered or auto-filled |
| **Source** | Rate source text (manual or database reference text) |
| **Total (Currency)** | \(Quantity \times Rate\) |
| **Action** | Edit material, Move to trash |

> Double-clicking a material row opens the Edit dialog for that row.

#### C.2.2 Adding a component (Foundation)

Click **+ Add Component** at the bottom of the tab. Enter a component name and click **Add**.

> If the component name already exists in the same tab, a duplicate warning is shown and the component is not created.

#### C.2.3 Deleting a component (Foundation)

Click **Delete Component** inside a component section. Confirmation is required.

> Deleting a component permanently removes the component and all its materials (including any items not in Trash).

---

### C.3 Sub-Structure tab

Open the **Sub-Structure** tab. By default, a new project includes these Sub-Structure components:

- **Pier**
- **Pier Cap**
- **Pedestal**
- **Bearings**

The Sub-Structure tab uses the same component-section layout, materials table columns, and row actions described in C.2.

<!-- ============================================================
IMAGE PLACEHOLDER - C.3
File: documentation_images/partC/03_sub_structure_tab.png

HOW TO CAPTURE:
- Open the Sub-Structure tab
- Ensure at least one component has 1+ material row so row actions are visible
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "+ Add Component" button at the bottom
  Label: "① Add Component - creates a new component section in this tab"
============================================================ -->

![Sub-Structure Tab](documentation_images/PartC/03_sub_structure_tab.png)

---

### C.4 Super-Structure tab

Open the **Super-Structure** tab. By default, a new project includes these Super-Structure components:

- **Girder**
- **Deck Slab**
- **Diaphragm**
- **Cross Bracings**

The Super-Structure tab uses the same component-section layout, materials table columns, and row actions described in C.2.

<!-- ============================================================
IMAGE PLACEHOLDER - C.4
File: documentation_images/partC/04_super_structure_tab.png

HOW TO CAPTURE:
- Open the Super-Structure tab
- Ensure at least one component contains material rows
- Keep Girder and Deck Slab sections visible
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around one full super-structure component section
  Label: "① Super-structure components - deck and load-carrying bridge elements"
============================================================ -->

![Material Dialog - Overview](documentation_images/PartC/04_super_structure_tab.png)

---

### C.5 Miscellaneous tab

Open the **Miscellaneous** tab. By default, a new project includes these Miscellaneous components:

- **Railing  & Crash Barrier & Median**
- **Drainage**
- **Asphalt, Utilities and Other Materials**
- **Waterproofing**

The Miscellaneous tab uses the same component-section layout, materials table columns, and row actions described in C.2.

> During Excel import, any unrecognised CAT# sheet name is routed into Miscellaneous and grouped under a component name derived from the sheet name.
<!-- ============================================================
IMAGE PLACEHOLDER - C.5
File: documentation_images/partC/05_miscellaneous_tab.png

HOW TO CAPTURE:
- Open the Miscellaneous tab
- Ensure at least one component contains material rows
- Keep Asphalt, Utilities and Other Materials visible
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around one miscellaneous component section
  Label: "① Active : Miscellaneous"
============================================================ -->

![Material Dialog - Overview](documentation_images/PartC/05_miscellaneous_tab.png)

---

### C.6 Adding a material (Material Dialog)

Click **Add Material to \<Component\>** in any component section. The **Add Material** dialog opens. The same dialog is used for:

- **Add Material** - adding a new row
- **Edit Material** - editing an existing row (opened via Edit action or double-click)

<!-- ============================================================
IMAGE PLACEHOLDER - C.6
File: documentation_images/partC/04_material_dialog_overview.png

HOW TO CAPTURE:
- Open any tab (e.g., Foundation → Pile Cap)
- Click "Add Material to Pile Cap"
- Ensure the dialog is fully visible (scroll to show Carbon Emission Factor and Recyclability sections)
- Screenshot the dialog only (crop to dialog bounds)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Allow editing DB-filled values" checkbox
  Label: "① DB lock - prevents accidental edits to suggested values"
- ② Draw a rectangular blue box around the Carbon Emission Factor "Include" checkbox
  Label: "② Carbon inclusion toggle - controls whether carbon fields are used"
- ③ Draw a rectangular blue box around the Recyclability "Include" checkbox
  Label: "③ Recyclability inclusion toggle - controls whether recycling fields are used"
============================================================ -->

![Material Dialog - Overview](documentation_images/PartC/06_material_dialog_overview.png)

#### C.6.1 Material suggestions and auto-fill (when configured)

The dialog can provide material suggestions from the project’s configured schedule-of-rates (SOR) database.

- A label **Suggestions from:** shows the active database key.
- If a database is configured, a **Category** dropdown may appear for filtering suggestions.
- In **Material Name**, entering `?` opens the full suggestion list.
- Selecting a suggested material auto-fills fields such as Unit, Item ID / SOR Code, Rate, Rate Source, and Carbon Emission Factor (when available).

> When a suggestion is selected, DB-filled fields are locked by default. Use **Allow editing DB-filled values** only when changes are intentional.

#### C.6.2 Basic fields

| Field | Required | Description |
|-------|----------|-------------|
| **Material Name** | Yes | Work name shown in the table. Also used to detect duplicates inside the same component. |
| **Item ID / SOR Code** | No | Optional reference code for traceability. |
| **Quantity** | Yes | Must be greater than zero. |
| **Unit** | Yes | Unit code/symbol for the quantity. |
| **Rate (Unit Cost)** | No | Unit rate. When suggestions are used, this may be auto-filled. |
| **Rate Source** | No | Text reference for the rate (e.g., DSR year, market source). |

> **Validation:** Material Name is required. Quantity must be \(> 0\). Duplicate names inside the same component are blocked when adding a new row.

#### C.6.3 Carbon Emission Factor

This section controls per-material carbon emission fields.

| Field / Control | Purpose |
|----------------|---------|
| **Include** | If enabled, carbon emission data is stored and used for carbon calculations. |
| **Emission Factor** | Numeric emission factor. |
| **Per Unit (kgCO₂e / …)** | Denominator unit used with the emission factor. |
| **Source** | Reference for emission factor. |
| **Conversion Factor** | Factor converting the material unit into the denominator unit when needed. |

The dialog also shows a **formula preview** when Quantity, Emission Factor, and Conversion Factor are valid non-zero values.

> **Validation warnings (carbon):**
> - If Include is enabled but Emission Factor is 0, a warning is shown and carbon inclusion may be disabled.
> - If Include is enabled but Conversion Factor is 0, a warning is shown and carbon inclusion may be disabled.
> - If material unit and carbon denominator unit represent different dimensions and Conversion Factor is 1.0, a confirmation warning is shown.

#### C.6.4 Recyclability

This section controls end-of-life scrap and recovery fields.

| Field / Control | Purpose |
|----------------|---------|
| **Include** | If enabled, recycling/scrap data is stored and used for recyclability calculations. |
| **Scrap Rate (unit cost)** | Scrap value per unit at end-of-life. |
| **Recovery after Demolition (%)** | Percentage recovery after demolition (0–100). |

> **Validation (recyclability):**
> - Recovery percentage cannot exceed 100%.
> - If Include is enabled but both Scrap Rate and Recovery are zero, a warning is shown and recyclability inclusion may be disabled.

#### C.6.5 Dialog actions

| Button | Behaviour |
|--------|----------|
| **Save to Custom DB…** | Saves the current material definition into a user-created custom database for future suggestions. |
| **Cancel** | Closes the dialog without saving changes. |
| **Add to Table** | Adds the material as a new row in the component table. |
| **Update Changes** | Saves edits to the selected material row. |

---

### C.7 Uploading from Excel (Import Excel)

Click **Import Excel**. Select a supported file type:

- Excel: `.xlsx`, `.xls`
- OpenDocument Spreadsheet: `.ods`

After selection, the app parses the file and opens an **Import Preview** window for review and correction before writing into the project.

#### C.7.1 Required sheet naming

Only sheets whose names begin with `CAT#` are treated as material sheets.

- Example recognised sheet names:
  - `CAT#Foundation`
  - `CAT#Sub-Structure`
  - `CAT#Super-Structure`
  - `CAT#Misc`
- A sheet named `Metadata` (case-insensitive) is parsed separately and shown as a read-only Metadata tab in the preview.

> Sheets that do not start with `CAT#` are ignored during import (except `Metadata`).

#### C.7.2 Required column header format (CID# prefix)

Within each `CAT#...` sheet, columns must use the `CID#` prefix (case-insensitive). The part after `CID#` must match a recognised canonical field name.

**Recognised CID# column names:**

- `CID#ID`
- `CID#Name`
- `CID#Quantity`
- `CID#Unit`
- `CID#Rate`
- `CID#Rate_Src`
- `CID#Carbon_Emission_Factor`
- `CID#Carbon_Emission_units`
- `CID#Conversion_Factor`
- `CID#Carbon_Emission_Src`
- `CID#Scrap_Rate`
- `CID#Recovery_Pct`
- `CID#Component`

> CID# header matching is case-insensitive for the prefix, but the canonical field name must match a recognised name. Unrecognised `CID#...` columns are ignored and shown as warnings in the preview.

#### C.7.3 Import Preview window behaviour

The preview window shows one tab per imported sheet.

- Cells are editable by double-click.
- An **Issues** column summarises row-level problems.
- Error rows are highlighted red and cannot be selected for import.
- Warning rows are highlighted yellow and can be imported.
- A **Valid rows only** filter hides rows where Name, Quantity, Rate, or Unit are missing/zero.

> If a row’s Name already exists in the target component in the project (matched case-insensitively), the row is flagged as a duplicate and is **unchecked by default**. Selecting it forces an overwrite-style import for that row.

#### C.7.4 Component routing during import

The import uses `CID#Component` to determine which component section the row belongs to.

- If `CID#Component` is blank, it is assigned to **Uncategorised**.
- If the sheet name after `CAT#` does not match a known category, the sheet is routed to **Miscellaneous**, and its name is prefixed into the component name during import.

> If incoming component names already exist in the project, the import prompts for how to handle each conflict: **Merge** (append into existing component) or **Rename** (import as a new component with an auto-suffix such as “(Imported)”).

---

### C.8 Trash

Materials can be moved out of active calculation without deleting them by using Trash.

#### C.8.1 Moving a material to Trash

In any component table, click the Trash action for a row.

Effect:

- The row is removed from the active component table
- The tab’s **Total** and **Items** values update immediately
- The Trash button shows a count badge (e.g., `🗑️ (3)`)

#### C.8.2 Opening Trash view

Click the Trash button.

The view switches from the four-tab workspace to the **Trash Bin** view.

- The Trash button label becomes **Back to Work**
- Trashed items are grouped under headings of the form **Deleted from: \<Component\>**
- Trashed items are explicitly excluded from all calculations

<!-- ============================================================
IMAGE PLACEHOLDER - C.8
File: documentation_images/partC/05_trash_view.png

HOW TO CAPTURE:
- Ensure at least 2 materials exist in Trash across different components
- Click the Trash button to open Trash Bin
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Back to Work" button state
  Label: "① Back to Work - returns to the tabbed entry view"
- ② Draw a rectangular blue box around one "Deleted from: ..." group box
  Label: "② Trashed items grouped by original component"
- ③ Draw a rectangular blue box around the Action column in a trash table
  Label: "③ Trash actions - Restore or Permanently delete"
============================================================ -->

![Trash View](documentation_images/PartC/08_trash_view.png)

#### C.8.3 Restoring a material

In Trash Bin, click **Restore** on a row.

Effect:

- The item is removed from Trash
- The item is reinserted into its original component table
- The Trash count updates

#### C.8.4 Permanently deleting a material

In Trash Bin, click **Permanently delete** on a row. Confirmation is required.

> Permanent delete cannot be undone.

---

### C.9 Example values - Sone River Road Bridge (45 m RCC T-Girder)

Use the following example entries to populate Construction Work Data for the Sone River Road Bridge. These are representative quantities for a straightforward RCC T-Girder bridge and are intended for demonstrating workflow and reporting.

> These entries are examples for the guide. Use project-specific BOQ values for real analyses.

#### C.9.1 Foundation tab - example materials

**Component: Excavation**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Excavation in soil (ordinary) | 220 | m3 | 450 | DSR 2023 |
| Dewatering and disposal | 1 | ls | 250000 | Project estimate |

**Component: Pile**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Bored cast-in-situ RCC pile concrete (M30) | 120 | m3 | 6500 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 14 | tonne | 72000 | Market rate (steel) |
| Pile cage fabrication and placing | 1 | ls | 180000 | Contractor quote |

**Component: Pile Cap**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC in pile cap (M30) | 95 | m3 | 6500 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 11 | tonne | 72000 | Market rate (steel) |
| Formwork for pile cap | 650 | m2 | 950 | DSR 2023 |

#### C.9.2 Sub-Structure tab - example materials

**Component: Pier**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC in pier shaft (M35) | 80 | m3 | 7000 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 12 | tonne | 72000 | Market rate (steel) |
| Formwork for pier shaft | 900 | m2 | 1050 | DSR 2023 |

**Component: Pier Cap**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC in pier cap (M35) | 55 | m3 | 7000 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 8 | tonne | 72000 | Market rate (steel) |
| Formwork for pier cap | 520 | m2 | 1050 | DSR 2023 |

**Component: Pedestal**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC in pedestal (M35) | 12 | m3 | 7000 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 1.5 | tonne | 72000 | Market rate (steel) |

**Component: Bearings**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Elastomeric bearings (neoprene) | 16 | nos | 18000 | Vendor quote |

#### C.9.3 Super-Structure tab - example materials

**Component: Girder**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Precast RCC T-girders (M40) | 160 | m3 | 8200 | Market rate (precast yard) |
| Reinforcement steel (Fe500) | 20 | tonne | 72000 | Market rate (steel) |
| Erection of girders (crane + labour) | 1 | ls | 350000 | Contractor quote |

**Component: Deck Slab**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC in deck slab (M35) | 95 | m3 | 7000 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 16 | tonne | 72000 | Market rate (steel) |
| Formwork for deck slab | 1200 | m2 | 950 | DSR 2023 |

**Component: Diaphragm**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC diaphragms (M35) | 18 | m3 | 7000 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 3 | tonne | 72000 | Market rate (steel) |

**Component: Cross Bracings**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC cross bracings (M35) | 10 | m3 | 7000 | Market rate (Bihar) |
| Reinforcement steel (Fe500) | 2 | tonne | 72000 | Market rate (steel) |

#### C.9.4 Miscellaneous tab - example materials

**Component: Railing  & Crash Barrier & Median**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| RCC railing/parapet (M30) | 35 | m3 | 6500 | Market rate (Bihar) |
| Crash barrier (steel) | 180 | m | 3200 | Vendor quote |

**Component: Drainage**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Drain spouts / weep holes | 40 | nos | 450 | DSR 2023 |
| Drainage pipe and fittings | 1 | ls | 45000 | Project estimate |

**Component: Asphalt, Utilities and Other Materials**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Bituminous wearing course | 340 | m2 | 650 | DSR 2023 |
| Approach slab / utility shifting | 1 | ls | 200000 | Project estimate |

**Component: Waterproofing**

| Material Name | Quantity | Unit | Rate (INR) | Rate Source |
|--------------|----------|------|------------|-------------|
| Waterproofing membrane | 340 | m2 | 420 | DSR 2023 |

---

### C - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Construction Work Data - Overview (annotated) | `documentation_images/PartC/01_construction_work_data_overview.png` |
| Foundation Tab - Layout (annotated) | `documentation_images/PartC/02_foundation_tab_layout.png` |
| Sub-Structure Tab (annotated) | `documentation_images/PartC/03_sub_structure_tab.png` |
| Super-Structure Tab (annotated) | `documentation_images/PartC/04_super_structure_tab.png` |
| Miscellaneous Tab (annotated) | `documentation_images/PartC/05_miscellaneous_tab.png` |
| Material Dialog - Overview (annotated) | `documentation_images/PartC/06_material_dialog_overview.png` |
| Trash View (annotated) | `documentation_images/PartC/08_trash_view.png` |

---

## D - Financial Data

The Financial Data page defines **economic parameters** used to bring all life-cycle costs to a **common present value** and to model **financing and price escalation** over the analysis period. These values feed directly into the LCCA engine when **Calculate** is run.

---

### D.1 Overview of the Financial Data page

Click **Financial Data** in the left navigation menu. The page contains:

- A section header **Economic Parameters**
- Four required numeric parameters (each with an optional **Source** text field)
- Action buttons: **Load Suggested Values** and **Clear All**

<!-- ============================================================
IMAGE PLACEHOLDER - D.1
File: documentation_images/partD/01_financial_data_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Financial Data
- Click "Load Suggested Values" so all required fields show non-zero values
- Optionally fill Source fields (e.g. "RBI policy / MoRTH guidance")
- Full window screenshot (include window titlebar)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Economic Parameters" section (all rate fields and source fields)
  Label: "① Economic Parameters - required for Calculate"
- ② Draw a rectangular blue box around the Load Suggested Values and Clear All buttons
  Label: "② Page actions - preset fill or reset"
============================================================ -->

![Financial Data - Overview](documentation_images/partD/01_financial_data_overview.png)

---

### D.2 Economic Parameters

All monetary results in **Results** and **Compare** are expressed in the project currency (INR for the example project). The parameters below control how future-year costs are discounted, escalated, and financed.

#### D.2.1 Field reference

| Field | Required | Input range | Description |
|-------|----------|-------------|-------------|
| **Discount Rate** | Yes | 0.00–100.00 (%) | Rate used to convert future cash flows into **present value**. Reflects the time value of money and investment risk. |
| **Source: Discount Rate** | No | Text | Citation or basis for the discount rate (e.g. government guidance, agency policy). |
| **Inflation Rate** | Yes | 0.00–100.00 (%) | Expected **annual** increase in general price levels. Used to escalate costs that occur in future years. |
| **Source: Inflation Rate** | No | Text | Citation or basis for the inflation assumption. |
| **Interest Rate** | Yes | 0.00–100.00 (%) | **Borrowing or lending rate** applied to the financed portion of capital. |
| **Source: Interest Rate** | No | Text | Citation or basis for the interest assumption. |
| **Investment Ratio** | Yes | 0.0000–1.0000 | Proportion of total cost **financed through investment** (equity/debt mix), expressed as a decimal from 0 to 1. Example: `0.5` = 50% of costs financed. |
| **Source: Investment Ratio** | No | Text | Citation or basis for the financing split. |

> Each rate field shows a **(%)** suffix. **Investment Ratio** has no percent suffix; enter `0.5` for 50%, not `50`.

> Fields marked required must be set before **Calculate** succeeds. Optional **Source** fields appear in the generated report when filled.

#### D.2.2 Role in LCCA

| Parameter | Role in the analysis |
|-----------|----------------------|
| **Discount Rate** | Brings maintenance, demolition, traffic, carbon, and other future costs to **present value** so they can be summed with initial construction cost. A higher rate reduces the present value of distant future costs. |
| **Inflation Rate** | Adjusts nominal costs that occur in later years of the service life. Works with the discount rate to represent real versus nominal cost streams over the analysis period. |
| **Interest Rate** | Applies to the **financed share** of capital. Used when spreading or costing borrowed funds over the life cycle. |
| **Investment Ratio** | Defines how much of the life-cycle cost stream is treated as **investment-financed** (0 = none, 1 = fully financed). The complement represents non-investment funding. Typical bridge studies use values between 0.3 and 0.7 depending on funding structure. |

Together, these four values are passed to the calculation engine as `GeneralParameters` along with bridge life, construction duration, and carbon parameters from other pages.

---

### D.3 Load Suggested Values

Click **Load Suggested Values** to fill the numeric fields with built-in defaults. The button does not modify optional **Source** text fields.

**Values applied by Load Suggested Values:**

| Field | Value |
|-------|-------|
| Discount Rate | 6.70 % |
| Inflation Rate | 5.15 % |
| Interest Rate | 7.75 % |
| Investment Ratio | 0.5 |

> These defaults are starting points for Indian public-infrastructure style analyses. Replace them with project-specific or agency-approved values before final reporting.

After loading, the page marks data as changed and autosaves to the project when the project is saved.

<!-- ============================================================
IMAGE PLACEHOLDER - D.3
File: documentation_images/partD/02_after_load_suggested.png

HOW TO CAPTURE:
- On Financial Data, click "Clear All" and confirm (optional - to show empty state contrast)
- Click "Load Suggested Values"
- Crop or full-window screenshot showing the four filled numeric fields
- Do not need to capture Source fields unless filled

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Load Suggested Values button
  Label: "① Fills all numeric fields from built-in defaults"
============================================================ -->

![Financial Data - After Load Suggested Values](documentation_images/partD/02_after_load_suggested.png)

---

### D.4 Clear All

Click **Clear All**. A confirmation dialog asks whether to reset all fields on this page.

On confirmation:

- All numeric fields return to their minimum (0)
- All text **Source** fields are cleared
- Validation highlighting is cleared

> **Clear All** affects only the Financial Data page. It does not change Construction Work Data, Bridge Data, or other sections.

---

### D.5 Validation

Validation runs when **Calculate** is clicked (and when the page’s `validate()` method is invoked). Results are **errors** (blocking) and **warnings** (non-blocking but highlighted).

#### D.5.1 Required-field errors

The four numeric parameters are required. A spin box still at its **minimum value (0)** is treated as **unset** because 0 is the field default.

| Condition | Result |
|-----------|--------|
| Discount Rate, Inflation Rate, Interest Rate, or Investment Ratio left at 0 (initial default) | Error: `Required: <field title>` - red border |
| User enters any value above the minimum | Required check passes for that field |

> To use **Load Suggested Values** as a fast path, click the button after creating a new project. To enter custom values, type directly into each spin box.

#### D.5.2 Range warnings

Values above typical public-infrastructure ranges trigger an **orange warning border** and a verification message. Warnings do not block calculation by themselves; the app prompts for confirmation when warnings are present.

| Field | Warning threshold | Message |
|-------|-------------------|---------|
| **Discount Rate** | > 30.00 % | Discount rate exceeds 30% - please verify |
| **Inflation Rate** | > 25.00 % | Inflation rate exceeds 25% - please verify |
| **Interest Rate** | > 35.00 % | Interest rate exceeds 35% - please verify |

**Investment Ratio** has no high-range warning rule. Valid range is enforced by the control: 0.0000–1.0000.

<!-- ============================================================
IMAGE PLACEHOLDER - D.5
File: documentation_images/partD/03_validation_warning.png

HOW TO CAPTURE:
- Set Discount Rate to 35.00 (or any value > 30)
- Trigger validation (click Calculate, or navigate away and back if the app validates on Calculate only)
- Screenshot showing the orange warning border on Discount Rate and any warning message if visible

HOW TO ANNOTATE:
- ① Draw a rectangular amber box around the Discount Rate field border
  Label: "① Warning border - value above typical range"
============================================================ -->

![Financial Data - Validation warning](documentation_images/partD/03_validation_warning.png)

---

### D.6 Example values - Sone River Road Bridge

For the guide example (India, INR, 50-year design life), use either **Load Suggested Values** or enter the following explicitly:

```
Discount Rate     : 6.70 %
Inflation Rate      : 5.15 %
Interest Rate       : 7.75 %
Investment Ratio    : 0.5

Source: Discount Rate   : MoRTH / RBI long-term guidance (example)
Source: Inflation Rate  : CPI-based assumption (example)
Source: Interest Rate   : Lending rate assumption (example)
Source: Investment Ratio: 50% financed (example)
```

> Source text is optional. Use it to document assumptions for peer review and PDF reports.

---

### D - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Financial Data - Overview (annotated) | `documentation_images/partD/01_financial_data_overview.png` |
| After Load Suggested Values (annotated) | `documentation_images/partD/02_after_load_suggested.png` |
| Validation warning - high discount rate (annotated) | `documentation_images/partD/03_validation_warning.png` |

---

## E - Traffic and Road Data

The Traffic and Road Data page supplies **road user cost (RUC)** inputs for the social pillar of LCCA. In **INDIA** mode, the app computes delay, accident, and operating costs from vehicle counts, road geometry, traffic flow, and Wholesale Price Index (WPI) adjustment factors. In **GLOBAL** mode, a single aggregated daily road user cost replaces the detailed India model.

---

### E.1 Calculation Mode

Click **Traffic and Road Data** in the left navigation menu. The first control is **Calculation Mode**.

| Mode | When available | Panel shown |
|------|----------------|-------------|
| **INDIA** | Project country is India | Vehicle table, alternate route, road parameters, peak hours, WPI section |
| **GLOBAL** | Any project; forced when country is not India | **Road User Cost per Day** only |

#### E.1.1 Country-dependent behaviour

On page display, the app reads **Project Country** from General Information:

- **India:** **Calculation Mode** is enabled. The user may switch between **INDIA** and **GLOBAL**.
- **Not India:** **Calculation Mode** is locked to **GLOBAL**. The INDIA panel is hidden.

The active mode is stored in the project as `mode` (`INDIA` or `GLOBAL`).

<!-- ============================================================
IMAGE PLACEHOLDER - E.1
File: documentation_images/partE/01_calculation_mode_india.png

HOW TO CAPTURE:
- Open "Sone River Road Bridge" (India project)
- Navigate to Traffic and Road Data
- Ensure Calculation Mode is set to INDIA
- Full window screenshot showing Calculation Mode and the top of the INDIA panel (Vehicle Traffic Data table visible)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Calculation Mode dropdown
  Label: "① INDIA / GLOBAL - INDIA enabled only for India projects"
- ② Draw a rectangular blue box around the stacked INDIA content (Vehicle Traffic Data and below)
  Label: "② INDIA panel - detailed RUC inputs"
============================================================ -->

![Traffic and Road Data - INDIA mode](documentation_images/partE/01_calculation_mode_india.png)

<!-- ============================================================
IMAGE PLACEHOLDER - E.1b
File: documentation_images/partE/02_calculation_mode_global.png

HOW TO CAPTURE:
- Same project, set Calculation Mode to GLOBAL (or use a non-India project)
- Full window screenshot showing only Road User Cost per Day above Remarks

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Road User Cost per Day field
  Label: "① GLOBAL mode - single aggregated daily RUC input"
============================================================ -->

![Traffic and Road Data - GLOBAL mode](documentation_images/partE/02_calculation_mode_global.png)

#### E.1.2 GLOBAL mode validation

| Condition | Result |
|-----------|--------|
| **Road User Cost per Day** ≤ 0 | Warning: `Road User Cost per Day is 0 - road user cost will not be included` - orange border |

No other fields appear in GLOBAL mode.

---

### E.2 Vehicle Traffic Data

Available in **INDIA** mode only. The **Vehicle Traffic Data** table lists eight fixed vehicle categories.

#### E.2.1 Vehicle categories and columns

| Vehicle Type | Vehicles / Day | Accident % | PWR |
|--------------|----------------|------------|-----|
| Small Car | Editable (0–9,999,999) | Editable (0.00–100.00) | - |
| Big Car | Editable | Editable | - |
| Two Wheeler | Editable | Editable | - |
| Ordinary Buses | Editable | Editable | - |
| Deluxe Buses | Editable | Editable | - |
| LCV | Editable | Editable | - |
| HCV | Editable | Editable | Editable (0.00–999.90); default **7.22** |
| MCV | Editable | Editable | Editable (0.00–999.90); default **8.00** |

| Column | Meaning |
|--------|---------|
| **Vehicles / Day** | Average daily traffic (ADT) for that vehicle class on the bridge approach road. |
| **Accident %** | Share of total accident involvement attributed to that vehicle class. All classes must sum to **100%** when any traffic is entered (see E.2.3). |
| **PWR** | **Power-to-weight ratio** - used for HCV and MCV only. Shown as **-** for other classes. |

#### E.2.2 Force free-flow conditions off-peak

Checkbox below the vehicle table: **Force free-flow conditions off-peak**.

- Default: **checked**
- When checked, off-peak periods are modelled as free-flow for operating-cost calculations
- Stored as `force_free_flow_off_peak`

<!-- ============================================================
IMAGE PLACEHOLDER - E.2
File: documentation_images/partE/03_vehicle_traffic_table.png

HOW TO CAPTURE:
- INDIA mode, Vehicle Traffic Data table fully visible with example values filled
- Include the Force free-flow conditions off-peak checkbox
- Crop or full window as needed to show all eight rows

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the PWR column cells for HCV and MCV only
  Label: "① PWR - HCV/MCV only; defaults 7.22 / 8.00"
- ② Draw a rectangular blue box around the Force free-flow conditions off-peak checkbox
  Label: "② Off-peak free-flow toggle"
============================================================ -->

![Vehicle Traffic Data table](documentation_images/partE/03_vehicle_traffic_table.png)

#### E.2.3 Validation rules (vehicle table)

Validation applies when the sum of **Vehicles / Day** across all classes is **greater than zero**.

| Condition | Result |
|-----------|--------|
| Sum of **Vehicles / Day** = 0 | Warning: `No vehicle traffic data - all vehicles per day are 0` - road user cost from detailed traffic is skipped; vehicle-table checks below are not run |
| Sum of **Accident %** ≠ 100% (tolerance ±0.1) | Error: `Vehicle accident percentages must sum to 100% - currently X.X%` - red border on table |
| **HCV** or **MCV** has Vehicles / Day > 0 and PWR ≤ 0 | Error: `PWR must be > 0 for HCV when vehicles per day > 0` (or MCV) |

When all **Vehicles / Day** values are zero, the user effectively opts out of India-model road user costs; only the WPI zero-value check still runs (see E.7).

---

### E.3 Alternate Road Configuration

Section **Alternate Road Configuration** defines the detour route used during construction and maintenance closures.

#### E.3.1 Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Alternate Road Carriageway** | Yes | Lane configuration of the alternate route. First option: **- Select -** (invalid for calculation). |
| **Carriageway Width** | Yes | Width of the alternate carriageway in metres. |
| **Hourly Capacity** | Yes | Design hourly capacity of the alternate route (veh/hr). |

#### E.3.2 Lane-type options and auto-fill

Selecting a lane type auto-fills **Carriageway Width** and **Hourly Capacity** from built-in IRC-style defaults:

| Alternate Road Carriageway | Carriageway Width (m) | Hourly Capacity (veh/hr) |
|----------------------------|----------------------|--------------------------|
| Single Lane | 3.75 (locked) | 435 |
| Intermediate Lane | 5.50 (locked) | 1,158 |
| Two Lane (Two Way) | 7.00 (locked) | 2,400 |
| Two Lane (One Way) | 7.00 (locked) | 2,700 |
| Three Lane (One Way) | 10.50 (locked) | 4,200 |
| Four Lane (Two Way) | 7.00 (locked) | 5,400 |
| Six Lane (Two Way) | 10.50 (locked) | 8,400 |
| Eight Lane (Two Way) | 14.00 (locked) | 13,600 |
| 4 Lane Expressway (Two Way) | User entry (enabled) | 5,000 |
| 6 Lane Expressway (Two Way) | User entry (enabled) | 7,500 |
| 8 Lane Expressway (Two Way) | User entry (enabled) | 9,200 |

- **- Select -:** **Carriageway Width** and **Hourly Capacity** reset to 0; width field disabled.
- Fixed-width lane types: **Carriageway Width** is auto-filled and **disabled**.
- Expressway types: width is **not** preset (`None` in data); **Carriageway Width** is **enabled** for manual entry.

The selected display name is stored internally as an IRC **code** (e.g. `2L` for Two Lane (Two Way)).

<!-- ============================================================
IMAGE PLACEHOLDER - E.3
File: documentation_images/partE/04_alternate_road_autofill.png
 
HOW TO CAPTURE:
- Select "Two Lane (Two Way)" in Alternate Road Carriageway
- Show Carriageway Width = 7.00 (disabled) and Hourly Capacity = 2400
- Screenshot the Alternate Road Configuration section only

HOW TO ANNOTATE:
- ① Draw a rectangular blue box linking Alternate Road Carriageway dropdown to the auto-filled width and capacity fields
  Label: "① Lane selection auto-fills width and capacity"
- ② Draw a rectangular amber box on the disabled Carriageway Width field
  Label: "② Locked when width is fixed for lane type"
============================================================ -->

![Alternate Road Configuration](documentation_images/partE/04_alternate_road_autofill.png)

#### E.3.3 Validation rules

| Condition | Result |
|-----------|--------|
| **Alternate Road Carriageway** = **- Select -** | Error: `Alternate Road Carriageway must be selected` |
| **Carriageway Width** = 0 | Error: `Carriageway Width cannot be 0` |
| **Hourly Capacity** = 0 (when total ADT > 0) | Error: `Hourly Capacity cannot be 0` |

> Hourly Capacity and carriageway checks are skipped when all **Vehicles / Day** values are zero.

---

### E.4 Accident Severity Distribution

Section **Accident Severity Distribution** splits accidents by injury outcome. Three percentage fields:

| Field | Range | Description |
|-------|-------|-------------|
| **Minor Injury** | 0.00–100.00 (%) | Percentage of accidents resulting in minor injury |
| **Major Injury** | 0.00–100.00 (%) | Percentage of accidents resulting in major injury |
| **Fatal Accident** | 0.00–100.00 (%) | Percentage of accidents resulting in fatal injury |

#### E.4.1 Auto-balancing behaviour

The three fields are linked so the total remains 100%:

- Editing **Minor Injury:** **Fatal Accident** adjusts to `100 − Minor − Major` if Major ≤ remaining; otherwise Major is capped and Fatal set to 0.
- Editing **Major Injury:** if Minor + Major > 100, Major is capped; **Fatal Accident** = `100 − Minor − Major`.
- Editing **Fatal Accident:** if Minor + Fatal > 100, Fatal is capped; **Major Injury** = `100 − Minor − Fatal`.

#### E.4.2 Validation rules

When total ADT > 0:

| Condition | Result |
|-----------|--------|
| Minor + Major + Fatal ≠ 100% (tolerance 1×10⁻⁴) | Error: `Accident severity must sum to 100% - currently X.X%` |

<!-- ============================================================
IMAGE PLACEHOLDER - E.4
File: documentation_images/partE/05_accident_severity.png

HOW TO CAPTURE:
- Fill Minor Injury, Major Injury, Fatal Accident (e.g. 30, 55, 15)
- Change Minor Injury and capture fields after auto-adjustment, OR annotate the three fields with sum = 100%
- Crop to Accident Severity Distribution section

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around all three severity fields
  Label: "① Auto-balanced - editing one field adjusts the others to total 100%"
============================================================ -->

![Accident Severity Distribution](documentation_images/partE/05_accident_severity.png)

---

### E.5 Road Parameters

Section **Road Parameters** describes operating conditions on the alternate/detour route and work-zone exposure.

#### E.5.1 Field reference

| Field | Required | Range | Description |
|-------|----------|-------|-------------|
| **Road Roughness** | No | 2,000–100,000 (mm/km) | Surface smoothness; lower values indicate smoother ride quality. |
| **Road Rise** | Yes | 0.000–9,999.000 (m/km) | Upward gradient of the alternate road. |
| **Road Fall** | Yes | 0.000–9,999.000 (m/km) | Downward gradient of the alternate road. |
| **Additional Reroute Distance** | No | 0.000–9,999.000 (km) | Extra distance travelled due to rerouting during construction or maintenance. |
| **Additional Travel Time** | No | 0.000–9,999.000 (min) | Extra travel time from rerouting. |
| **Crash Rate** | Yes | 0.00–999,999.00 (acc / M km) | Accidents per million vehicle-kilometres of road length per day. |
| **Work Zone Multiplier** | Yes | 0.0000–1.0000 | Multiplier for accident risk or delays under work-zone conditions. Default: **1**. |

#### E.5.2 Role in LCCA

| Parameter | Role in the analysis |
|-----------|----------------------|
| **Road Roughness** | Affects vehicle operating costs (fuel, tyre wear, maintenance) on the detour route. |
| **Road Rise / Road Fall** | Gradient affects fuel consumption and travel speed for heavy and light vehicles. |
| **Additional Reroute Distance** | Length of detour; scales delay and operating costs during closures. Also referenced from Carbon Emission → Traffic Diversion. |
| **Additional Travel Time** | Fixed extra time per trip on the detour, independent of distance-based delay. |
| **Crash Rate** | Baseline accident frequency on the route; combined with vehicle mix and severity split for accident costs. |
| **Work Zone Multiplier** | Scales accident exposure near the construction/maintenance zone. Value **0** disables work-zone accident scaling (warning shown). |

#### E.5.3 Validation warnings

| Field | Warning condition | Message |
|-------|-------------------|---------|
| **Road Rise** | < 0.01 or > 9,999 | Road Rise is 0 or unusually high - please verify the value |
| **Road Fall** | < 0.01 or > 9,999 | Road Fall is 0 or unusually high - please verify the value |
| **Additional Reroute Distance** | < 0.01 or > 1,000 | Additional Reroute Distance is 0 or unusually high - please verify the value |
| **Additional Travel Time** | < 0.01 or > 1,000 | Additional Travel Time is 0 or unusually high - please verify the value |
| **Crash Rate** | < 0.01 or > 10,000 | Crash Rate is 0 or unusually high - please verify the value |
| **Work Zone Multiplier** | < 0.001 | Work Zone Multiplier is 0 - work zone accident scaling will be disabled |

> **Road Rise**, **Road Fall**, and **Crash Rate** are required. A value still at the spin-box minimum (0) is treated as unset for required fields with default 0.
 
 <!-- ============================================================
IMAGE PLACEHOLDER - E.5
File: documentation_images/partE/05_road_parameters.png

HOW TO CAPTURE:
- Scroll to Road Parameters
- Enter the Sone River example values
- Ensure all fields are visible in one screenshot

============================================================ -->
![Road Parameters](documentation_images/partE/06_road_parameters.png)
---

### E.6 Traffic Flow and Peak Hour Distribution

#### E.6.1 Number of Peak Hours

| Field | Required | Range | Description |
|-------|----------|-------|-------------|
| **Number of Peak Hours** | Yes | 0–24 | Count of peak traffic hours modelled per day. |

Changing **Number of Peak Hours** rebuilds the **Peak Hour Distribution** table with that many editable peak rows plus one fixed summary row.

| Warning condition | Message |
|-------------------|---------|
| < 1 or > 24 | Number of Peak Hours must be between 1 and 24 |

Default proportion for each new peak row: **4.00 %**.

#### E.6.2 Peak Hour Distribution table

| Row | Editable | Description |
|-----|----------|-------------|
| **Peak Hour 1** … **Peak Hour N** | Yes (0.00–100.00 %) | Share of daily traffic occurring in that peak hour. |
| **Other Hours (Average)** | No (computed) | Average proportion for the remaining `24 − N` hours. |

**Other Hours (Average)** is calculated as:

\[
\text{Other Hours (\%)} = \frac{100 - \sum \text{peak proportions}}{24 - N}
\]

When a peak proportion changes, each peak spin box’s maximum is capped so the peak total cannot exceed 100%.

#### E.6.3 Validation rules (peak hours)

Applied when total ADT > 0 and **Number of Peak Hours** > 0:

| Condition | Result |
|-----------|--------|
| Any peak hour proportion = 0 | Error: `Peak hour proportion cannot be 0: Peak Hour X` (lists affected hours) |
| Sum of peak proportions > 100% | Error: `Peak hour proportions sum to X.X% - must be ≤ 100%` |

Peak values are stored as fractions (e.g. 10% → `0.1` under `peak_hour_1`, `peak_hour_2`, …).

<!-- ============================================================
IMAGE PLACEHOLDER - E.6
File: documentation_images/partE/06_peak_hour_distribution.png

HOW TO CAPTURE:
- Set Number of Peak Hours to 2
- Enter Peak Hour 1 = 10%, Peak Hour 2 = 10%
- Show Other Hours (Average) computed (80% / 22 ≈ 3.64%)
- Screenshot Peak Hour Distribution table and Number of Peak Hours field

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around Number of Peak Hours
  Label: "① Controls row count in peak table"
- ② Draw a rectangular blue box around Other Hours (Average) read-only cell
  Label: "② Auto-calculated from remaining traffic share"
============================================================ -->

![Peak Hour Distribution](documentation_images/partE/06_peak_hour_distribution.png)

---

### E.7 WPI Adjustment Factors

**INDIA** mode only. The **WPI Adjustment Factors** section applies Wholesale Price Index–based ratios to road user cost components by vehicle type.

#### E.7.1 Profile selector

| Control | Behaviour |
|---------|-----------|
| **WPI Profile:** dropdown | Lists database profiles (bold) and custom profiles (prefixed with ★). |
| Integrity badge | ✅ verified, ⚠ hash mismatch, ❓ no hash - tooltip describes state and DB vs Custom. |
| **+ New** | Creates a blank custom profile (name, year, optional remark dialog). |
| **✎ Save As** | Saves current table values as a new custom profile. |
| **🗑 Delete** | Deletes the selected custom profile only (DB profiles cannot be deleted). |
| **⬆ Save to My Library** | Saves current profile + table data to the global user WPI library (`user.db`). |
| **⬇ Import from Library** | Imports a library profile as a new custom profile in this project. |

On load, if any database profile fails integrity verification, a red warning lists unlisted profile names.

#### E.7.2 WPI table structure

The table has **16 cost columns** under six group headings:

| Group | Columns |
|-------|---------|
| Fuel Cost | Petrol, Diesel, Engine Oil, Other Oil, Grease |
| Vehicle Cost | Prop. Damage, Tyre Cost, Spare Parts, Fixed Depr. |
| Commodity | Hold. Cost |
| Pass. & Crew | Passenger, Crew |
| Medical Cost | Fatal, Major, Minor |
| VOT Cost | VOT Cost |

Rows:

1. Group header row (Fuel Cost, Vehicle Cost, …)
2. Column label row
3. **Common to All** checkbox row
4. One data row per vehicle: Small Car, Big Car, Two Wheeler, Ordinary Bus, Deluxe Bus, LCV, HCV, MCV

#### E.7.3 Editable vs read-only behaviour

| Profile type | Table cells | Common to All checkboxes |
|--------------|-------------|--------------------------|
| **Database profile** | Read-only | Disabled (vehicle-specific columns only) |
| **Custom profile** | Editable per rules below | Enabled on vehicle-specific columns |

**Common to All** (vehicle-dimension columns only):

- Checked (default when all vehicle values in a column are equal): one value applies to all vehicles; only the first vehicle row is editable; other rows mirror the first and appear dimmed.
- Unchecked: each vehicle row is independently editable.
- Non-vehicle columns (Petrol, Diesel, Passenger, Crew, Fatal, Major, Minor): checkbox is **disabled** with tooltip *This factor is not vehicle-specific - always common to all*.

On save, the app stores a snapshot with **base** (2019 profile), **selected** (current table), and **ratio** (selected ÷ base element-wise).

#### E.7.4 Validation rules (WPI)

WPI validation runs **regardless of vehicle ADT**.

| Condition | Result |
|-----------|--------|
| Any checked **Common to All** column has first-row value = 0 | Error: `WPI value cannot be zero: <Group / Label>` |
| Any unchecked column has any vehicle row = 0 | Error: `WPI value cannot be zero: <Group / Label> (<Vehicle>)` |

<!-- ============================================================
IMAGE PLACEHOLDER - E.7
File: documentation_images/partE/07_wpi_table.png

HOW TO CAPTURE:
- INDIA mode, scroll to WPI Adjustment Factors
- Select a database profile (e.g. 2025) showing read-only table
- Include WPI Profile dropdown and integrity badge
- Horizontal scroll if needed to show column groups

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Common to All checkbox row
  Label: "① Vehicle-specific columns - sync all rows when checked"
- ② Draw a rectangular amber box on dimmed read-only spin boxes (DB profile)
  Label: "② DB profile - values read-only"
============================================================ -->

![WPI Adjustment Factors](documentation_images/partE/07_wpi_table.png)

---

### E.8 Remarks and Page Validation

Shared by both calculation modes.

#### E.8.1 Remarks / Notes

Rich-text **Remarks / Notes** editor at the bottom of the page. Content is stored as HTML in the project and included in reporting when populated.

#### E.8.2 Clear All

Click **Clear All**. Confirmation is required.

On confirmation:

- Vehicle table, peak table, remarks, and all form fields reset to defaults
- **Alternate Road Carriageway** returns to **- Select -**
- WPI selector resets to the first listed database profile
- Validation result label is hidden

#### E.8.3 Validate this page

Click **Validate this page** to run the same checks as **Calculate** for this page only. Results appear below the buttons:

| Outcome | Display |
|---------|---------|
| No errors or warnings | Green: ✔ All checks passed |
| Errors | Red ✖ lines with message text |
| Warnings | Orange ⚠ lines with message text |

<!-- ============================================================
IMAGE PLACEHOLDER - E.8
File: documentation_images/partE/08_validate_page.png

HOW TO CAPTURE:
- INDIA mode with intentional validation issue (e.g. Accident % sum ≠ 100) OR all checks passing
- Click Validate this page
- Screenshot buttons and validation result label

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around Validate this page button
  Label: "① Runs page validation without Calculate"
- ② Draw a rectangular blue box around the result message area
  Label: "② Errors (red) and warnings (orange)"
============================================================ -->

![Validate this page](documentation_images/partE/08_validate_page.png)

---

### E.9 Example values - Sone River Road Bridge

INDIA mode example for a 2-lane state-highway bridge (Bihar). Align **Alternate Road Carriageway** with the two-lane detour typical for this project.

**Calculation Mode:** INDIA

**Vehicle Traffic Data**

| Vehicle Type | Vehicles / Day | Accident % | PWR |
|--------------|----------------|------------|-----|
| Small Car | 2,200 | 18.00 | - |
| Big Car | 650 | 10.00 | - |
| Two Wheeler | 2,800 | 68.00 | - |
| Ordinary Buses | 15 | 1.00 | - |
| Deluxe Buses | 80 | 1.00 | - |
| LCV | 120 | 1.00 | - |
| HCV | 25 | 0.50 | 7.22 |
| MCV | 10 | 0.50 | 8.00 |

**Force free-flow conditions off-peak:** checked

**Alternate Road Configuration**

| Field | Value |
|-------|-------|
| Alternate Road Carriageway | Two Lane (Two Way) |
| Carriageway Width | 7.00 m (auto-filled) |
| Hourly Capacity | 2,400 veh/hr (auto-filled) |

**Accident Severity Distribution:** Minor Injury 30.00 %, Major Injury 55.00 %, Fatal Accident 15.00 %

**Road Parameters**

| Field | Value |
|-------|-------|
| Road Roughness | 3,500 mm/km |
| Road Rise | 2.000 m/km |
| Road Fall | 1.500 m/km |
| Additional Reroute Distance | 3.500 km |
| Additional Travel Time | 8.000 min |
| Crash Rate | 120.00 acc / M km |
| Work Zone Multiplier | 1.0000 |

**Traffic Flow**

| Field | Value |
|-------|-------|
| Number of Peak Hours | 2 |
| Peak Hour 1 | 10.00 % |
| Peak Hour 2 | 10.00 % |
| Other Hours (Average) | 3.64 % (computed) |

**WPI:** Select the latest available database profile for the analysis year (e.g. **2025**). Custom edits are optional.

> For a non-India project or a screening study, switch to **GLOBAL** and enter **Road User Cost per Day** directly.

---

### E - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Calculation Mode - INDIA panel (annotated) | `documentation_images/partE/01_calculation_mode_india.png` |
| Calculation Mode - GLOBAL panel (annotated) | `documentation_images/partE/02_calculation_mode_global.png` |
| Vehicle Traffic Data table (annotated) | `documentation_images/partE/03_vehicle_traffic_table.png` |
| Alternate Road Configuration auto-fill (annotated) | `documentation_images/partE/04_alternate_road_autofill.png` |
| Accident Severity Distribution (annotated) | `documentation_images/partE/05_accident_severity.png` |
| Peak Hour Distribution (annotated) | `documentation_images/partE/06_peak_hour_distribution.png` |
| WPI Adjustment Factors table (annotated) | `documentation_images/partE/07_wpi_table.png` |
| Validate this page (annotated) | `documentation_images/partE/08_validate_page.png` |

---

## F - Maintenance Data

The Maintenance Data page defines **use-stage maintenance and repair costs** for the economic pillar, **carbon emission costs** linked to maintenance activities for the environmental pillar, and **closure durations** that drive road user costs during major repair and bearing replacement for the social pillar. All percentage-based costs are applied against totals computed from Construction Work Data and Carbon Emissions Data when **Calculate** is run.

Click **Maintenance Data** in the left navigation menu (listed as **Maintenance and Repair** under **Input Parameters**). The page contains four form sections, action buttons (**Load Suggested Values**, **Clear All**), and inline **ⓘ** documentation links on each field.

---

### F.1 Overview of the Maintenance Data page

The form is organised into four sections on a single scrollable page:

| Section | Purpose |
|---------|---------|
| **Routine Maintenance** | Annual-style inspection cost and interval |
| **Periodic Maintenance** | Periodic upkeep cost, linked carbon cost, and interval |
| **Major Works** | Major inspection and major repair - each with cost, interval, and (for repair) duration |
| **Bearings & Expansion Joints** | Replacement cost, interval, and on-site duration |

Major Works appears in the UI as two consecutive section headers: **Major Inspection** and **Major Repair**.

<!-- ============================================================
IMAGE PLACEHOLDER - F.1
File: documentation_images/partF/01_maintenance_data_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Maintenance Data (Maintenance and Repair)
- Click "Load Suggested Values" so all fields show non-zero values
- Full window screenshot showing all four section headers and both action buttons (scroll or resize window to include Routine through Bearings & Expansion Joints)


- ① Draw a rectangular blue box around Load Suggested Values and Clear All
  Label: "① Page actions"
============================================================ -->

![Maintenance Data - Overview](documentation_images/partF/01_maintenance_data_overview.png)

---

### F.2 Routine Maintenance

Section **Routine Maintenance** contains two fields that schedule routine bridge inspections over the design life.

#### F.2.1 Field reference

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Routine Inspection Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Inspection expenditure expressed as a percentage of **initial construction cost** (from Construction Work Data). |
| **Routine Inspection Frequency** | Yes | 0–50 | (year) | Interval between routine inspections, in years. |

> Each field label is followed by helper text and an **ⓘ** link that opens the in-app field documentation.

#### F.2.2 Role in LCCA

| Output (Results) | Pillar |
|------------------|--------|
| Routine Inspection Costs | Economic - use stage |

The cost percentage and frequency are combined with design life and Financial Data discounting to produce a present-value total at each inspection interval.

---

### F.3 Periodic Maintenance

Section **Periodic Maintenance** defines recurring upkeep beyond routine inspection, including an environmental cost component.

#### F.3.1 Field reference

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Periodic Maintenance Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Periodic maintenance expenditure as a percentage of **initial construction cost**. |
| **Periodic Maintenance Carbon Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Carbon emission cost of periodic maintenance as a percentage of **initial carbon emissions cost** (from Carbon Emissions Data). The unit suffix matches other cost fields; the helper text defines the carbon basis. |
| **Periodic Maintenance Frequency** | Yes | 0–100 | (year) | Interval between periodic maintenance events, in years. |

#### F.3.2 Role in LCCA

| Output (Results) | Pillar |
|------------------|--------|
| Periodic Maintenance Costs | Economic - use stage |
| Periodic Maintenance related Carbon Emissions | Environmental - use stage |

<!-- ============================================================
IMAGE PLACEHOLDER - F.3
File: documentation_images/partF/02_periodic_carbon_basis.png

HOW TO CAPTURE:
- Maintenance Data page, Periodic Maintenance section visible
- Load Suggested Values applied (Periodic Maintenance Carbon Cost = 0.550)
- Crop to the Periodic Maintenance section only

HOW TO ANNOTATE:
- ① Draw a rectangular blue box linking Periodic Maintenance Carbon Cost field to its helper text
  Label: "① Carbon cost - % of initial carbon emissions cost (not construction cost)"
============================================================ -->

![Periodic Maintenance - Carbon cost basis](documentation_images/partF/02_periodic_carbon_basis.png)

---

### F.4 Major Works

Major Works covers **major inspection** and **major repair** activities. The UI renders these as two separate section headers on the same page.

#### F.4.1 Major Inspection

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Major Inspection Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Cost of a major inspection event as a percentage of **initial construction cost**. |
| **Major Inspection Frequency** | Yes | 0–100 | (year) | Interval between major inspections, in years. |

| Output (Results) | Pillar |
|------------------|--------|
| Major Inspection Costs | Economic - use stage |

#### F.4.2 Major Repair

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Major Repair Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Cost of a major repair event as a percentage of **initial construction cost**. |
| **Major Repair Carbon Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Carbon emission cost of major repair as a percentage of **initial carbon emissions cost**. |
| **Major Repair Frequency** | Yes | 0–100 | (year) | Interval between major repair events, in years. |
| **Major Repair Duration** | Yes | 0–60 | (months) | Duration of major repair works on site, in **months**. Used to compute road user and rerouting carbon costs when Traffic Data is populated. |

| Output (Results) | Pillar |
|------------------|--------|
| Major Repair Costs | Economic - use stage |
| Major Repair related Carbon Emissions | Environmental - use stage |
| Carbon Emissions due to Rerouting during Major Repairs | Environmental - use stage |
| Road User Costs during Major Repairs | Social - use stage |

<!-- ============================================================
IMAGE PLACEHOLDER - F.4
File: documentation_images/partF/03_major_works.png

HOW TO CAPTURE:
- Maintenance Data page scrolled to Major Inspection and Major Repair sections
- Load Suggested Values applied
- Screenshot both subsections with Major Repair Duration visible

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Major Inspection section (both fields)
  Label: "① Major Inspection - cost % at interval"
- ② Draw a rectangular blue box around Major Repair Duration
  Label: "② Closure duration (months) - drives social and rerouting carbon costs"
============================================================ -->

![Major Works - Inspection and Repair](documentation_images/partF/03_major_works.png)

---

### F.5 Bearings & Expansion Joints

Section **Bearings & Expansion Joints** defines replacement of bearings and expansion joints over the bridge life.

#### F.5.1 Field reference

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Bearing & Expansion Joint Replacement Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Replacement cost expressed as a percentage of **superstructure cost** (Super-Structure tab total from Construction Work Data). The unit suffix shows construction cost; the helper text and calculation engine use the superstructure total. |
| **Bearing & Expansion Joint Replacement Frequency** | Yes | 0–100 | (year) | Interval between replacement events, in years. |
| **Bearing & Expansion Joint Replacement Duration** | Yes | 0–365 | (days) | On-site duration of replacement works, in **days**. Used for road user and rerouting carbon costs during replacement. |

#### F.5.2 Role in LCCA

| Output (Results) | Pillar |
|------------------|--------|
| Replacement Costs of Bearings and Expansion joints | Economic - use stage |
| Carbon Emissions due to Rerouting during Replacement of Bearings and Expansion joints | Environmental - use stage |
| Road User Costs during Replacement of Bearings and Expansion joints | Social - use stage |

<!-- ============================================================
IMAGE PLACEHOLDER - F.5
File: documentation_images/partF/04_bearings_expansion_joints.png

HOW TO CAPTURE:
- Bearings & Expansion Joints section visible with Load Suggested Values applied
- Ensure Super-Structure tab in Construction Work Data has materials so superstructure cost is non-zero in the project
- Crop to the three bearing/expansion joint fields

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around Bearing & Expansion Joint Replacement Cost
  Label: "① Applied against superstructure cost total, not full construction cost"
- ② Draw a rectangular blue box around Replacement Duration
  Label: "② Duration in days (not months)"
============================================================ -->

![Bearings & Expansion Joints](documentation_images/partF/04_bearings_expansion_joints.png)

---

### F.6 Load Suggested Values

Click **Load Suggested Values** to fill all maintenance fields on this page with built-in defaults. The button resets validation highlighting on filled fields and marks the page as changed (autosaved when the project is saved).

Fields on other pages (for example Demolition Data) are not modified - keys without a widget on this page are skipped silently.

**Values applied by Load Suggested Values:**

| Field | Value |
|-------|-------|
| Routine Inspection Cost | 0.100 % |
| Routine Inspection Frequency | 1 year |
| Periodic Maintenance Cost | 0.550 % |
| Periodic Maintenance Carbon Cost | 0.550 % |
| Periodic Maintenance Frequency | 5 years |
| Major Inspection Cost | 0.500 % |
| Major Inspection Frequency | 5 years |
| Major Repair Cost | 10.000 % |
| Major Repair Carbon Cost | 0.550 % |
| Major Repair Frequency | 20 years |
| Major Repair Duration | 3 months |
| Bearing & Expansion Joint Replacement Cost | 12.500 % |
| Bearing & Expansion Joint Replacement Frequency | 25 years |
| Bearing & Expansion Joint Replacement Duration | 2 days |

> These defaults are starting points for Indian public-infrastructure style bridge studies. Replace them with project-specific or agency-approved values before final reporting.

<!-- ============================================================
IMAGE PLACEHOLDER - F.6
File: documentation_images/partF/05_after_load_suggested.png

HOW TO CAPTURE:
- Click Clear All and confirm (optional - to show empty contrast)
- Click Load Suggested Values
- Screenshot showing filled fields in at least Routine Maintenance and Major Repair sections, with Load Suggested Values button visible

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Load Suggested Values button
  Label: "① Fills all 14 maintenance fields from built-in defaults"
============================================================ -->

![Maintenance Data - After Load Suggested Values](documentation_images/partF/05_after_load_suggested.png)

---

### F.7 Clear All

Click **Clear All**. A confirmation dialog asks whether to reset all fields on this page.

On confirmation:

- All numeric fields return to their minimum (0)
- Validation highlighting is cleared
- The page is marked as changed

> **Clear All** affects only the Maintenance Data page. It does not change Demolition Data, Construction Work Data, or other sections.

---

### F.8 Validation

Validation runs when **Calculate** is clicked. All 14 fields are required. Results are **errors** (blocking) and **warnings** (non-blocking but highlighted).

#### F.8.1 Required-field errors

A spin box still at its **minimum value (0)** is treated as **unset** because 0 is the field default.

| Condition | Result |
|-----------|--------|
| Any maintenance field left at 0 (initial default) | Error: `'<field title>' is required - enter a value above the minimum` - red border |
| User enters any value above the minimum | Required check passes for that field |

> Click **Load Suggested Values** after creating a new project to satisfy all required fields in one step.

#### F.8.2 Range warnings

Values outside typical ranges trigger an **orange warning border** and a verification message. Warnings do not block calculation by themselves; the app prompts for confirmation when warnings are present.

**Cost fields** (all `*_cost` keys): warning when value **&lt; 0.01** or **&gt; 100.00**.

| Field | Message when &lt; 0.01 |
|-------|------------------------|
| Routine Inspection Cost | Routine Inspection Cost is 0 - cost will not be included |
| Periodic Maintenance Cost | Periodic Maintenance Cost is 0 - cost will not be included |
| Periodic Maintenance Carbon Cost | Periodic Maintenance Carbon Cost is 0 - cost will not be included |
| Major Inspection Cost | Major Inspection Cost is 0 - cost will not be included |
| Major Repair Cost | Major Repair Cost is 0 - cost will not be included |
| Major Repair Carbon Cost | Major Repair Carbon Cost is 0 - cost will not be included |
| Bearing & Expansion Joint Replacement Cost | Bearing & Expansion Joint Cost is 0 - cost will not be included |

**Frequency fields**: warning when value **&lt; 1** or above the section maximum.

| Field | Valid range (no warning) | Message when out of range |
|-------|--------------------------|---------------------------|
| Routine Inspection Frequency | 1–50 years | Routine Inspection Frequency seems unusual - expected between 1 and 50 years |
| Periodic Maintenance Frequency | 1–100 years | Periodic Maintenance Frequency seems unusual - expected between 1 and 100 years |
| Major Inspection Frequency | 1–100 years | Major Inspection Frequency seems unusual - expected between 1 and 100 years |
| Major Repair Frequency | 1–100 years | Major Repair Frequency seems unusual - expected between 1 and 100 years |
| Bearing & Expansion Joint Replacement Frequency | 1–100 years | Bearing & Expansion Joint Frequency seems unusual - expected between 1 and 100 years |

**Duration fields**: warning when value **&lt; 1** or above the section maximum.

| Field | Valid range (no warning) | Message when out of range |
|-------|--------------------------|---------------------------|
| Major Repair Duration | 1–60 months | Major Repair Duration seems unusual - expected between 1 and 60 months |
| Bearing & Expansion Joint Replacement Duration | 1–365 days | Replacement Duration seems unusual - expected between 1 and 365 days |

<!-- ============================================================
IMAGE PLACEHOLDER - F.8
File: documentation_images/partF/06_validation_warning.png

HOW TO CAPTURE:
- Clear All and confirm, then set Routine Inspection Cost to 0.005 (above minimum but below 0.01 warn threshold) OR leave a frequency at 0 and trigger Calculate
- Screenshot showing orange warning border on the affected field

HOW TO ANNOTATE:
- ① Draw a rectangular amber box around the field with the orange warning border
  Label: "① Warning border - value outside typical range"
============================================================ -->

![Maintenance Data - Validation warning](documentation_images/partF/06_validation_warning.png)

---

### F.9 Example values - Sone River Road Bridge

For the guide example (India, INR, 50-year design life, 2024 construction), use either **Load Suggested Values** or enter the following explicitly:

```
Routine Inspection Cost              : 0.100 %
Routine Inspection Frequency         : 1 year

Periodic Maintenance Cost            : 0.550 %
Periodic Maintenance Carbon Cost     : 0.550 %
Periodic Maintenance Frequency       : 5 years

Major Inspection Cost                : 0.500 %
Major Inspection Frequency           : 5 years

Major Repair Cost                    : 10.000 %
Major Repair Carbon Cost             : 0.550 %
Major Repair Frequency               : 20 years
Major Repair Duration                : 3 months

Bearing & Expansion Joint Replacement Cost      : 12.500 %
Bearing & Expansion Joint Replacement Frequency : 25 years
Bearing & Expansion Joint Replacement Duration  : 2 days
```

> Ensure Construction Work Data (especially Super-Structure) and Carbon Emissions Data are populated before **Calculate**. Percentage-based maintenance costs are derived from those totals.

---

### F - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Maintenance Data - Overview (annotated) | `documentation_images/partF/01_maintenance_data_overview.png` |
| Periodic Maintenance - carbon cost basis (annotated) | `documentation_images/partF/02_periodic_carbon_basis.png` |
| Major Works - inspection and repair (annotated) | `documentation_images/partF/03_major_works.png` |
| Bearings & Expansion Joints (annotated) | `documentation_images/partF/04_bearings_expansion_joints.png` |
| After Load Suggested Values (annotated) | `documentation_images/partF/05_after_load_suggested.png` |
| Validation warning (annotated) | `documentation_images/partF/06_validation_warning.png` |

## G - Demolition Data

The Demolition Data page defines end-of-life inputs for the LCCA, expressed as percentages of initial construction and carbon costs, plus the demolition duration. These values feed into both economic and environmental pillar calculations when Calculate is run.

---

### G.1 Overview of the Demolition Data page

Click **Demolition Data** in the left navigation menu. The page contains:

- A section header **End of Life**
- Three required numeric fields under **End of Life**
- Action buttons: **Load Suggested Values** and **Clear All**

<!-- ============================================================
IMAGE PLACEHOLDER - G.1
File: documentation_images/partG/01_demolition_data_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Demolition Data
- Click "Load Suggested Values" so all required fields show non-zero values
- Full window screenshot (include window titlebar)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "End of Life" section (all three fields)
  Label: "① End of Life - demolition cost/carbon/duration"
- ② Draw a rectangular blue box around the Load Suggested Values and Clear All buttons
  Label: "② Page actions - preset fill or reset"
============================================================ -->

![Demolition Data - Overview](documentation_images/partG/01_demolition_data_overview.png)

---

### G.2 End of Life Fields

All three fields are required and expressed relative to initial values from Construction Works Data and Carbon Emission pages.

#### G.2.1 Field reference

| Field | Required | Input range | Description |
|-------|----------|-------------|-------------|
| **Demolition & Disposal Costs (%)** | Yes | 0.00–100.00 (%) | End-of-life demolition and disposal cost as a percentage of initial construction cost from Construction Works Data. |
| **Demolition & Disposal Carbon Cost (%)** | Yes | 0.00–100.00 (%) | End-of-life carbon emission cost as a percentage of initial construction carbon cost from Carbon Emission → Material Emissions. |
| **Demolition & Disposal Duration** | Yes | 0–60 (months) | Expected time to complete demolition and disposal work in months. Affects road user cost during end-of-life closure. |

#### G.2.2 Role in LCCA

| Parameter | Role in the analysis |
|-----------|----------------------|
| **Demolition & Disposal Costs (%) | Scales the initial construction cost total to estimate end-of-life economic cost in present value. |
| **Demolition & Disposal Carbon Cost (%)** | Scales the initial carbon emission total to estimate end-of-life environmental cost in present value. |
| **Demolition & Disposal Duration** | Defines the length of end-of-life road closure for calculating detour and delay costs in the social pillar. |

---

### G.3 Load Suggested Values

Click **Load Suggested Values** to fill all three fields with built-in defaults.

**Values applied by Load Suggested Values:**

| Field | Value |
|-------|-------|
| Demolition & Disposal Costs (%) | 10.00 % |
| Demolition & Disposal Carbon Cost (%) | 10.00 % |
| Demolition & Disposal Duration | 1 month |

> These defaults are starting points for typical bridge demolitions. Replace them with project-specific values before final reporting.

<!-- ============================================================
IMAGE PLACEHOLDER - G.3
File: documentation_images/partG/02_after_load_suggested.png

HOW TO CAPTURE:
- On Demolition Data, click "Clear All" and confirm
- Click "Load Suggested Values"
- Full window screenshot showing the three filled fields

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Load Suggested Values button
  Label: "① Fills all three fields from built-in defaults"
============================================================ -->

![Demolition Data - After Load Suggested Values](documentation_images/partG/02_after_load_suggested.png)

---

### G.4 Clear All

Click **Clear All**. A confirmation dialog asks whether to reset all fields on this page.

On confirmation:

- All numeric fields return to their minimum (0 for duration, 0.00 for percentages)
- Validation highlighting is cleared

> **Clear All** affects only the Demolition Data page.

---

### G.5 Validation

Validation runs when **Calculate** is clicked. Results are **errors** (blocking) and **warnings** (non-blocking but highlighted).

#### G.5.1 Required-field errors

All three fields are required. A field still at its minimum value is treated as unset.

| Condition | Result |
|-----------|--------|
| Demolition & Disposal Costs (%) left at 0.00 | Error: `Required: Demolition & Disposal Costs (%)` - red border |
| Demolition & Disposal Carbon Cost (%) left at 0.00 | Error: `Required: Demolition & Disposal Carbon Cost (%)` - red border |
| Demolition & Disposal Duration left at 0 | Error: `Required: Demolition & Disposal Duration` - red border |

#### G.5.2 Range warnings

Values outside typical ranges trigger an orange warning border.

| Field | Warning threshold | Message |
|-------|-------------------|---------|
| Demolition & Disposal Costs (%) | < 0.10 % or > 50.00 % | Demolition & Disposal Cost is 0% - if end-of-life demolition costs apply, enter a percentage of the initial construction cost / Demolition & Disposal Cost exceeds 50% of construction cost - this is unusually high; confirm the value is correct |
| Demolition & Disposal Carbon Cost (%) | < 0.10 % or > 50.00 % | Demolition & Disposal Carbon Cost is 0% - if carbon costs apply at end of life, enter a percentage of the initial carbon emission cost / Demolition & Disposal Carbon Cost exceeds 50% - this is unusually high; confirm this is the correct proportion of the initial carbon cost |
| Demolition & Disposal Duration | < 1 month or > 24 months | Demolition & Disposal Duration is 0 months - enter the expected time to complete demolition and disposal work / Demolition & Disposal Duration exceeds 24 months - this is a long demolition period; confirm the value is in months, not years |

---

### G.6 Example values - Sone River Road Bridge

For the guide example (India, INR, 50-year design life), use either **Load Suggested Values** or enter the following explicitly:

```
Demolition & Disposal Costs (%)       : 10.00 %
Demolition & Disposal Carbon Cost (%) : 10.00 %
Demolition & Disposal Duration       : 1 month
```

---

### G - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Demolition Data - Overview (annotated) | `documentation_images/partG/01_demolition_data_overview.png` |
| After Load Suggested Values (annotated) | `documentation_images/partG/02_after_load_suggested.png` |

---

## H - Carbon Emission

The Carbon Emission page captures greenhouse gas emissions across five categories: Social Cost of Carbon (SCC), Material Emissions, Transportation Emissions, Machinery/Equipment Emissions, and Traffic Rerouting Emissions.

---

### H.1 Overview of Carbon Emission Page

Click **Carbon Emission** in the left navigation menu. The page contains five tabs:
- Social Cost of Carbon
- Material Emissions
- Transportation Emissions
- Machinery/Equipment Emissions
- Traffic Rerouting Emissions

<!-- ============================================================
IMAGE PLACEHOLDER - H.1
File: documentation_images/partH/01_carbon_emission_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Carbon Emission
- Full window screenshot showing all five tabs

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the tab bar
  Label: "① Five carbon emission tabs"
============================================================ -->

![Carbon Emission Overview](documentation_images/partH/01_carbon_emission_overview.png)

---

### H.2 Social Cost of Carbon (SCC)

The Social Cost of Carbon tab calculates the economic cost of carbon emissions. Two modes are available:

#### H.2.1 K. Ricke et al. (Country-Level)

This mode uses country-level SCC estimates from the paper "Country-level social cost of carbon" (K. Ricke et al.). The page pulls in country data from your project's General Information.

#### H.2.2 Custom / Manual Override

This mode allows you to enter a custom SCC value manually.

<!-- ============================================================
IMAGE PLACEHOLDER - H.2
File: documentation_images/partH/02_social_cost_of_carbon.png

HOW TO CAPTURE:
- Navigate to the "Social Cost of Carbon" tab
- Full page screenshot showing the mode selector and both modes (if possible)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the mode selector (dropdown)
  Label: "① SCC calculation mode selector"
============================================================ -->

![Social Cost Of Carbon](documentation_images/partH/02_social_cost_of_carbon.png)

---

### H.3 Material Emissions

The Material Emissions tab shows carbon emissions from construction materials, pulled directly from your Construction Works Data. The table displays:

- Category (Foundation, Sub-Structure, Super-Structure, Misc)
- Material name
- Quantity and unit
- Conversion factor
- Emission factor and unit
- Total emissions for the material
- Action (edit, exclude/include)

The page includes:
- Summary bar showing total emissions and count of included items
- "Show Details" toggle to display category-wise breakdown
- Included and Excluded tables

#### H.3.1 Editing Material Emissions

Click the **edit** icon next to a material to open the Material Dialog and modify emission factors.

#### H.3.2 Excluding Materials

Click the **exclude** icon to remove a material from the calculation; click **include** to add it back.

<!-- ============================================================
IMAGE PLACEHOLDER - H.3
File: documentation_images/partH/03_material_emissions.png

HOW TO CAPTURE:
- Navigate to the "Material Emissions" tab
- Ensure some materials are included and some are excluded
- Full page screenshot showing summary bar, included/excluded tables

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the summary bar
  Label: "① Summary bar: total emissions and included items"
============================================================ -->

![Material Emissions](documentation_images/partH/03_material_emissions.png)

---

### H.4 Transportation Emissions

The Transportation Emissions tab captures emissions from transporting materials to the construction site.

#### H.4.1 Adding a Delivery

Click **+ Add Delivery** to open the Transportation Dialog, where you can:

- Select materials to include in this delivery
- Enter vehicle details (name, capacity, gross weight, empty weight, emission factor)
- Enter route details (origin, distance in km)

<!-- ============================================================
IMAGE PLACEHOLDER - H.4
File: documentation_images/partH/04_transportation_emissions.png

HOW TO CAPTURE:
- Navigate to the Transportation Emissions tab
- Create and save at least one delivery
- Full page screenshot showing the saved delivery card

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around one delivery card
  Label: "① Delivery card - transportation emission summary"
- ② Draw a rectangular blue box around the "+ Add Delivery" button
  Label: "② Add new delivery"
============================================================ -->

![Transportation Emissions](documentation_images/partH/04_transportation_emissions.png)

#### H.4.2 Add Delivery Dialog

<!-- ============================================================
IMAGE PLACEHOLDER - H.4.2
File: documentation_images/partH/05_add_delivery_dialog.png

HOW TO CAPTURE:
- Click "+ Add Delivery"
- Leave the Add Delivery dialog open
- Show route fields, vehicle fields, and material selection table

HOW TO ANNOTATE:
- ① Material quantities are pulled from Construction Works Data
- ② Delivery emissions are calculated from selected materials, vehicle characteristics, and route distance
============================================================ -->

![Add Delivery Dialog](documentation_images/partH/05_add_delivery_dialog.png)

 

---

### H.5 Machinery/Equipment Emissions

The Machinery/Equipment Emissions tab captures emissions from construction equipment. Two input methods are available: Detailed Equipment List or Lump Sum.

#### H.5.1 Detailed Equipment List

This mode uses a table to list each piece of equipment with:
- Equipment name
- Energy source (Diesel, Electricity (Grid), Electricity (Solar/Renewable), Other)
- Fuel/power rating
- Average hours/day
- Number of days
- Emission factor (EF)
- Consumption
- Emissions
- Action (edit, delete)

Click **Load Defaults** to populate the table with common construction equipment.

#### H.5.2 Lump Sum

This mode allows you to enter total electricity and fuel consumption directly:
- Electricity: consumption/day, number of days, EF
- Fuel: consumption/day, number of days, EF

<!-- ============================================================
IMAGE PLACEHOLDER - H.5
File: documentation_images/partH/05_machinery_emissions.png

HOW TO CAPTURE:
- Navigate to the "Machinery/Equipment Emissions" tab
- Ensure the Detailed Equipment List is selected
- Full page screenshot showing the equipment table

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the mode selector (radio buttons)
  Label: "① Input mode selector (Detailed / Lump Sum)"
============================================================ -->

![Machinery Emissions](documentation_images/partH/05_machinery_emissions.png)

---

### H.6 Traffic Rerouting Emissions

The Traffic Rerouting Emissions tab calculates emissions from traffic rerouting during construction. The mode is automatically set based on your Traffic and Road Data:
- If Traffic Data is in INDIA mode: "Calculate by Vehicle"
- Otherwise: "Enter Directly"

#### H.6.1 Calculate by Vehicle Mode

This mode shows:
- Reroute distance (pulled from Traffic Data)
- Vehicle emission factors table
- Total daily emissions

Click **Load Default Factors** to use default emission factors.

#### H.6.2 Enter Directly Mode

This mode lets you enter a single total daily emission value.

<!-- ============================================================
IMAGE PLACEHOLDER - H.6
File: documentation_images/partH/06_traffic_diversion_emissions.png

HOW TO CAPTURE:
- Navigate to the "Traffic Rerouting Emissions" tab
- Full page screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the reroute distance display
  Label: "① Reroute distance from Traffic Data"
============================================================ -->

![Traffic Rerouting Emissions](documentation_images/partH/06_traffic_diversion_emissions.png)

---

### H.7 Example Values

For the Sone River Road Bridge, use the following:
- Material Emissions: populated from Construction Works Data
- Transportation Emissions: add one delivery for each major material category
- Machinery Emissions: use Load Defaults
- Traffic Diversion: use Load Default Factors

---

### H - Screenshot Checklist

| Checklist Item | File |
|----------------|------|
| Carbon Emission - Overview (annotated) | `documentation_images/partH/01_carbon_emission_overview.png` |
| Social Cost of Carbon (annotated) | `documentation_images/partH/02_social_cost_of_carbon.png` |
| Material Emissions (annotated) | `documentation_images/partH/03_material_emissions.png` |
| Transportation Emissions (annotated) | `documentation_images/partH/04_transportation_emissions.png` |
| Machinery/Equipment Emissions (annotated) | `documentation_images/partH/05_machinery_emissions.png` |
| Traffic Rerouting Emissions (annotated) | `documentation_images/partH/06_traffic_diversion_emissions.png` |

---

## I - Recycling

The Recycling page calculates the value of recyclable materials at the end of the bridge's life.

---

### I.1 Overview of Recycling Page

Click **Recycling** in the left navigation menu. The page contains:
- Summary bar showing total recovered value and count of included items
- "Show Details" toggle to display category-wise breakdown
- Included in Recyclability table
- Excluded from Recyclability table

<!-- ============================================================
IMAGE PLACEHOLDER - I.1
File: documentation_images/partI/01_recycling_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Recycling
- Full window screenshot

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the summary bar
  Label: "① Summary bar: total recovered value and included items"
============================================================ -->

![Recycling Overview](documentation_images/partI/01_recycling_overview.png)

---

### I.2 Included / Excluded Tables

#### I.2.1 Included Table

Columns:
- Category (Foundation, Sub-Structure, Super-Structure, Misc)
- Material name
- Quantity and unit
- Recyclability (%)
- Recyclable quantity
- Scrap rate
- Recovered value
- Warning
- Action (edit, exclude)

#### I.2.2 Excluded Table

Columns:
- Category
- Material name
- Quantity and unit
- Recyclability (%)
- Scrap rate
- Reason (Incomplete Data, Manually Excluded)
- Action (edit, include)

---

### I.3 Editing Recyclability

Click the **edit** icon next to a material to open the Material Dialog, where you can modify the scrap rate and recovery percentage.

---

### I.4 Toggling Inclusion

Click the **exclude** icon to remove a material from the calculation; click **include** to add it back.

<!-- ============================================================
IMAGE PLACEHOLDER - I.4
File: documentation_images/partI/02_recycling_tables.png

HOW TO CAPTURE:
- On the Recycling page, ensure some materials are included and some are excluded
- Full page screenshot showing both tables

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Included" table
  Label: "① Included materials"
- ② Draw a rectangular blue box around the "Excluded" table
  Label: "② Excluded materials"
============================================================ -->

![Recycling Tables](documentation_images/partI/02_recycling_tables.png)

---

### I.5 Example Values

For the Sone River Road Bridge, ensure the following materials have recyclability data:
- Reinforcement steel (recovery 90%, scrap rate appropriate for INR)
- Structural steel (if applicable)

---

### I - Screenshot Checklist

| Checklist Item | File |
|----------------|------|
| Recycling - Overview (annotated) | `documentation_images/partI/01_recycling_overview.png` |
| Recycling Tables (annotated) | `documentation_images/partI/02_recycling_tables.png` |

---

## J - Results and Report

The Results and Report page validates your inputs, runs the LCCA calculation, and displays results.

---

### J.1 Overview of Results Page

Click **Results** in the left navigation menu. The page contains:
- "Validate inputs" button
- Results display area (once calculated)
- Report generation (once calculated)

<!-- ============================================================
IMAGE PLACEHOLDER - J.1
File: documentation_images/partJ/01_results_overview.png

HOW TO CAPTURE:
- Open the example project: "Sone River Road Bridge"
- Navigate to Results
- Full window screenshot before running calculation

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the "Validate inputs" button
  Label: "① Validate inputs"
============================================================ -->

![Results Overview](documentation_images/partJ/01_results_overview.png)

---

### J.2 Running Calculation

#### J.2.1 Validate Inputs

Click **Validate inputs** to check all input sections. The page shows errors (blocking) and warnings (non-blocking).

#### J.2.2 Run Calculation

If validation passes (no errors), click **Run the Life Cycle Cost (LCC) analysis**. The app calculates:
- Economic costs
- Environmental costs
- Social costs
- Total LCC

<!-- ============================================================
IMAGE PLACEHOLDER - J.2
File: documentation_images/partJ/02_calculation_running.png

HOW TO CAPTURE:
- After validating, click "Run the Life Cycle Cost (LCC) analysis"
- Screenshot the calculation progress (if visible) or the results loading state

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the progress indicator
  Label: "① Calculation in progress"
============================================================ -->

![Calculation Running](documentation_images/partJ/02_calculation_running.png)

---

### J.3 Reading Results

Results are displayed as:
- **Total Life Cycle Cost card**: Displays total LCC, and (in non-narrow view) an "About This Analysis" section with analysis period and year of construction
- Summary cards: Economic, Environmental, Social costs
- Stage-wise summary (Initial, Use, End-of-Life)
- Key findings / smart insights
- Charts: pie chart for cost breakdown, bar chart for stage-wise costs
- Detailed tables for each cost category

<!-- ============================================================
IMAGE PLACEHOLDER - J.3
File: documentation_images/partJ/03_results_display.png

TODO: Recapture screenshot - new "About This Analysis" section added to Total Life Cycle Cost card

HOW TO CAPTURE:
- After calculation completes, screenshot the results page showing total LCC and summary cards
- Ensure the "About This Analysis" section is visible

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the Total Life Cycle Cost card
  Label: "① Total LCC card"
- ② Draw a rectangular blue box around the "About This Analysis" section
  Label: "② About This Analysis"
============================================================ -->

![Results Display](documentation_images/partJ/03_results_display.png)

---

### J.4 Generating PDF Report

Click **Generate PDF Report** to open the **Report Section Dialog**. This dialog lets you select which sections and data tables to include in the final PDF.

#### J.4.1 Report Section Dialog

The dialog contains:
- A tree view of all available report sections, with checkboxes to include/exclude individual sections
- Real-time count of selected sections
- "Cancel" button to close the dialog without generating a report
- "Generate PDF" button to proceed with PDF creation

<!-- ============================================================
IMAGE PLACEHOLDER - J.4.1
File: documentation_images/partJ/05_report_section_dialog.png

TODO: Recapture screenshot - new Report Section Dialog

HOW TO CAPTURE:
- After calculation completes, click "Generate PDF Report"
- Screenshot the Report Section Dialog with all sections visible
- Ensure the tree view and buttons are in view

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the tree view
  Label: "① Report section selector"
- ② Draw a rectangular blue box around the "Generate PDF" button
  Label: "② Generate PDF"
============================================================ -->

![Report Section Dialog](documentation_images/partJ/05_report_section_dialog.png)

#### J.4.2 Final PDF Generation

After selecting the desired sections, click **Generate PDF**. A file browser opens to choose where to save the PDF. The final report includes:
- Project metadata
- Selected input data sections
- Calculation results
- Charts and tables
- Conclusion

<!-- ============================================================
IMAGE PLACEHOLDER - J.4.2
File: documentation_images/partJ/04_pdf_report.png

HOW TO CAPTURE:
- After clicking "Generate PDF" in the Report Section Dialog
- Screenshot the file browser or the generated PDF (if possible within the app)

HOW TO ANNOTATE:
- ① Draw a rectangular blue box around the file save location field
  Label: "① Save location"
============================================================ -->

![Pdf Report](documentation_images/partJ/04_pdf_report.png)

---

### J.5 Example Workflow

For the Sone River Road Bridge:
1. Navigate to Results
2. Click Validate inputs
3. Fix any errors
4. Run calculation
5. Review results
6. Generate PDF report

---

### J - Screenshot Checklist

| Checklist Item | File |
|----------------|------|
| Results - Overview (annotated) | `documentation_images/partJ/01_results_overview.png` |
| Calculation Running (annotated) | `documentation_images/partJ/02_calculation_running.png` |
| Results Display (annotated) | `documentation_images/partJ/03_results_display.png` |
| Report Section Dialog (annotated) | `documentation_images/partJ/05_report_section_dialog.png` |
| PDF Report (annotated) | `documentation_images/partJ/04_pdf_report.png` |

---

