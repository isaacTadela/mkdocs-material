# Hatch history

-----

All notable changes to Hatch will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

***Added:***

- Add `self report` command for submitting pre-populated bug reports to GitHub
- The reserved environment used for static analysis is now completely configurable
- Add the following methods to the `environment` interface for complete control over output during life cycle management: `app_status_creation`, `app_status_pre_installation`, `app_status_post_installation`, `app_status_project_installation`, `app_status_dependency_state_check`, `app_status_dependency_installation_check`, `app_status_dependency_synchronization`
- Add binaries for 32-bit versions of Windows
- Read configuration from any `~/.pypirc` file for the `index` publisher
- Use the Git user as the default username for new project URL metadata
- Add `HATCH_DEBUG` environment variable that when enabled will show local variables in the case of unhandled tracebacks
- Upgrade default CPython distributions to 20240224
- Upgrade Ruff to 0.3.1
- Upgrade PyApp to 0.15.1 for binary builds
- Bump the minimum supported version of Hatchling to 1.22.2

***Fixed:***

- When projects derive dependencies from metadata hooks, there is now by default a status indicator for when the hooks are executed for better responsiveness
- Fix dependency inheritance for the template of the `types` environment for new projects

## [1.9.4](https://github.com/pypa/hatch/releases/tag/hatch-v1.9.4) - 2024-03-12

***Fixed:***

- Limit the maximum version of Hatchling in anticipation of backward incompatible changes

## [1.9.3](https://github.com/pypa/hatch/releases/tag/hatch-v1.9.3) - 2024-01-25 ## {: #hatch-v1.9.3 }

***Fixed:***

- Fix loading of local plugins to account for newly released versions of a dependency

## [1.9.2](https://github.com/pypa/hatch/releases/tag/hatch-v1.9.2) - 2024-01-21 ## {: #hatch-v1.9.2 }

***Fixed:***

- Fix the default token variable name for publishing to PyPI

## [1.9.1](https://github.com/pypa/hatch/releases/tag/hatch-v1.9.1) - 2023-12-25 ## {: #hatch-v1.9.1 }

***Fixed:***

- Ensure that the `dependency_hash` method of the `environment` interface is called after `sync_dependencies` for cases where the hash is only known at that point, such as for dependency lockers
- Only acknowledge the `HATCH_PYTHON_VARIANT_*` environment variables for Python resolution for supported platforms and architectures
- Fix Python resolution when there are metadata hooks with unsatisfied dependencies

