# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### 🌱 Added

- Add new core components
  - FloatingButton (actions)
  - DataTable (data)
  - NavTable (data)
  - Dropdown (inputs)
  - InputError (inputs)
  - InputLabel (inputs)
  - Flexbox (layout)
  - Scrollability (layout)
  - Tabs (navigation)
  - StatusLight (status)
- Add new link page component
  - DesignPreset (other)
- Add new helpers
  - getHashCode
  - getSortedObject
  - isValidColorCode
- Add new icons
  - copy
  - share
- Add new peer dependency
  - smoothscroll-polyfill

### 👷 Changed

- Change Dialog (feedback) core component
  - Add async support to action and cancel button
- Change Content (layout) core component
  - Add width property
- Change Theme (layout) core component
  - Add smoothscroll polyfill
- Change Checkbox (input) core component
  - Add onBlur property
  - Update HTML structure
  - Update CSS code
- Change FileDetails and FileGallery (media) core component
  - Update value "id" to "fileId"
- Change useForm hook
  - Add support for dropdown fields
  - Add onBlur property to checkbox fields
  - Add hasChanges function
  - Update state when fieldsInfo argument changes
- Change peer dependencies
  - Update react-router-dom to >= 5.2.0
  - Update styled-components to >= 5.1.0
  - Update typescript to >= 4.0.0

### 📆 Deprecated

\-

### 🗑️ Removed

\-

### 🛠️ Fixed

- Fix IconButton (action) core component
  - Update behaviour for 0 values of counter property
- Fix Checkbox (input) core component
  - Update HTML structure
  - Update CSS code

### 👮 Security

\-

## [v0.2.0] - 2020-05-01

### 🌱 Added

- Add new core components
  - IconButton (actions)
  - Dialog (feedback)
  - Response (feedback)
  - Logo (graphics)
  - Checkbox (inputs)
  - Form (inputs)
  - Page (layout)
  - Content (layout)
  - Main (layout)
  - Section (layout)
  - Visibility (layout)
  - FileGallery (media)
  - FileDetails (media)
  - Link (navigation)
  - NavBar (navigation)
  - AppBar (navigation)
  - SideBar (navigation)
  - TabBar (navigation)
  - Bureaucracy (navigation)
  - Title (typography)
  - Heading (typography)
  - Subheading (typography)
  - Paragraph (typography)
  - Detail (typography)
- Add new helper
  - getRandomId
- Add new icons
  - add
  - alarm
  - arrow down
  - arrow right
  - check
  - delete
  - download
  - folder
  - gear
  - house
  - list
  - night
  - sun
  - warning
- Add new openmojis
  - face with monocle
  - fire
  - flag germany
  - globe showing americas
  - hugging face
  - link
  - money with wings
  - nerd face
  - shopping cart
  - smiling face with sunglasses
  - sparkles
  - stopwatch
  - woman dancing

### 👷 Changed

- Change previous basic components
  - Move from "basic" to the new "core" folder
  - Add navigation functionality to ActionButton and update CSS code
  - Improve accessibility of TextInput with ARIA

### 🛠️ Fixed

- Fix, update and refactor useForm hook

## [v0.1.0] - 2020-04-15

### 🌱 Added

- Add new basic components
  - Theme (layout)
  - CircleLoader (status)
  - ActionButton (actions)
  - TextInput (inputs)
- Add new contexts
  - ColorScheme
  - DeviceType
- Add new hook
  - useForm
- Add new helpers
  - getDeviceColorScheme
  - getDeviceType
  - getSearchParam

[unreleased]: https://github.com/megalink-io/design-system/compare/v0.1.0...HEAD
[v0.2.0]: https://github.com/megalink-io/design-system/releases/tag/v0.2.0
[v0.1.0]: https://github.com/megalink-io/design-system/releases/tag/v0.1.0
