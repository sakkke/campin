# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.6.0] - 2021-11-26
### Added
- Make marker position change when clicked

### Changed
- Update `manifest.webmanifest`

## [0.5.0] - 2021-11-25
### Added
- Add `short_name` field in `manifest.webmanifest`
- Add `meta[name="theme-color"]` in `index.html`

## [0.4.0] - 2021-11-24
### Added
- Add `manifest.webmanifest`
- Add favicon

### Fixed
- Fix dependencies

## [0.3.1] - 2021-11-23
### Fixed
- Fix key name

## [0.3.0] - 2021-11-23
### Added
- Add help page
- Add `activated` directive in `<Item>`
- New dependency: `@smui/data-table`
- Implement stats feature

### Changed
- Change behavior when item clicked

### Fixed
- Make top-app-bar fixed
- Fix `min-height` in `<main>`
- Fix issue that is not centered correctly
- Fix issue that data is not pushed to `localStorage` correctly

## [0.2.0] - 2021-11-22
### Added
- New dependencies: `@smui/tooltip`, `@smui/top-app-bar`, `@smui/drawer`, `@smui/list`, `svelte-spa-router`
- Add tooltip to buttons
- Add icon to text field
- Add variables for smui
- Add top-app-bar and drawer
- Implement routing feature

### Changed
- Change `h1` to `span` in `Heading.svelte`
- Rename `Heading.svelte` to `Logo.svelte`

## [0.1.0] - 2021-11-21
### Added
- First release

[Unreleased]: https://github.com/sakkke/campin/compare/v0.6.0...HEAD
[0.6.0]: https://github.com/sakkke/campin/releases/tag/v0.6.0
[0.5.0]: https://github.com/sakkke/campin/releases/tag/v0.5.0
[0.4.0]: https://github.com/sakkke/campin/releases/tag/v0.4.0
[0.3.1]: https://github.com/sakkke/campin/releases/tag/v0.3.1
[0.3.0]: https://github.com/sakkke/campin/releases/tag/v0.3.0
[0.2.0]: https://github.com/sakkke/campin/releases/tag/v0.2.0
[0.1.0]: https://github.com/sakkke/campin/releases/tag/v0.1.0