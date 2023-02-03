# DLS Boilerplate

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Getting Started

This workspace designed to handle the kickoff of building new Design language system using React, Typescript, Storybook and emotion. and following [Atomic Design principles](https://bradfrost.com/blog/post/atomic-web-design/).

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

### Generate React Component

**_Atom_**

Run `npx nx run core:generate-atom --args="--name=button --group=inputs"` to generate a new atom component categorized inside `atoms` folder and under `inputs` group.

**_Molecule_**

Run `npx nx run core:generate-molecule --args="--name={{buttonGroup}} --group=inputs"` to generate a new molecule component categorized inside `molecules` folder and under `inputs` group.