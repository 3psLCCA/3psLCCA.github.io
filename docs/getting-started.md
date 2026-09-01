---
sidebar_position: 2
title: Getting Started
---

import DownloadCards from '@site/src/components/DownloadCards';

<p align="center">
  <img src="/img/logo.png" alt="3psLCCA logo" width="88" height="88" class="spin-logo" />
</p>

# Getting Started

This page covers installing and launching the 3psLCCA desktop application. A web application
is [TODO].

## Download

<DownloadCards />

## Installer setup (Windows / Linux)

1. Run the downloaded installer (`.exe` on Windows, `.sh` on Linux) and follow the setup prompts.
2. Launch **3psLCCA** from the Start Menu (Windows) or your applications launcher (Linux).

## Conda setup (all platforms)

:::tip
This option bundles a portable LaTeX distribution needed for PDF report generation, and is the
only option on macOS.
:::

Remove the `defaults` channel so package resolution doesn't conflict with the channels below:

```bash
conda config --remove channels defaults
```

Add the channels that host 3psLCCA and its dependencies, in priority order:

```bash
conda config --add channels conda-forge
conda config --add channels osdag
conda config --add channels zehen-249
```

Create a dedicated environment for 3psLCCA:

```bash
conda create -n 3pslcca
```

Activate the environment (repeat this in any new terminal session before running the app):

```bash
conda activate 3pslcca
```

Install the application package into the active environment:

```bash
conda install three-ps-lcca-gui
```

Launch the application:

```bash
threePSLCCA
```

## System requirements

- Windows or Linux (64-bit) for the installer; Windows, Linux, or macOS (64-bit) for the Conda package
- Conda package requires Python 3.10–3.12 and Miniconda

## Next steps

Continue to [Concepts](./concepts.md) to understand how the 3psLCCA framework structures a
bridge life cycle cost assessment.

## Uninstall

### Windows (installer)

1. Open **Settings → Apps → Installed Apps**.
2. Search for **3psLCCA**, click it, and select **Uninstall**.
3. Follow the uninstaller prompts.

### Linux (installer)

Run the uninstaller script that was placed in the installation directory:

```bash
~/.local/share/3psLCCA/uninstall.sh
```

Or use your desktop environment's software manager to remove **3psLCCA**.

### Conda

Deactivate the environment first if it is active:

```bash
conda deactivate
```

Then remove the entire environment:

```bash
conda env remove -n 3pslcca
```

This removes the application and all its dependencies installed in that environment.
