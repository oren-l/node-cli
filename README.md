# Cli Template for NodeJS

Use this template to create npm package with executables.

## Requirements

- NodeJS
- pnpm

## Folder Structure

```
src
├── bin
│   ├── bump.ts
│   └── greet.ts
└── lib
    └── bump
        ├── package.ts
        └── version.ts
```

Each file in the `bin` directory is built using `pnpm run build` command to `dist` directory.

Files in `lib` directory are available for import under `@lib/`. For example `import {...} from "@lib/bump/version"`

The files in `bin` and `lib` are just for demonstration purposes, remove them when using this template.

## Executables

When installing this package via npm, the executables that are available are only the ones that are declared in `package.json` `bin` property.

## Scripts

- `pnpm run typecheck` - check typescript rules
- `pnpm run test` - not yet implemented
- `pnpm run build` - builds source to `dist` folder
- `pnpm run status` - checks project status (typecheck + build passes)
