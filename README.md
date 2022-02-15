
# webtrees module huhwt-clippings_cart_enhanced

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

![webtrees major version](https://img.shields.io/badge/webtrees-v2.0.x-green)
![Latest Release](https://img.shields.io/github/v/release/huhwt/huhwt-clippings_cart_enhanced)

This [webtrees](https://www.webtrees.net/) custom module replaces the original 'Clippings Cart' module.
It offers additional possibilities to add records to the clippings cart and owns beside the possibility
to export GEDCOM information for visualizing the records in the clippings cart using a diagram.

This custom module is mainly a backport of the hh_clippings_cart_enhanced by Hermann Hartenthaler
(https://github.com/hartenthaler/hh_clippings_cart_enhanced) which was developed for upcoming
webtrees-2.1. Since it is not foreseeable when webtrees-2.1 will be ready for productive use, 
and because of the special qualities of the module, it seemed to make sense to me to transfer it
back to webtrees-2.0.

For features and background of this module please have a look at the above given link.

## Contents
This Readme contains the following main sections

* [Description](#description)
* [Requirements](#requirements)
* [Installation](#installation)
* [Upgrade](#upgrade)
* [Translation](#translation)
* [Contact Support](#support)
* [Thank you](#thanks)
* [License](#license)

<a name="description"></a>
## Description

An action initiated by the user then takes place on the records in the clippings cart, such as
* the export to a GEDCOM zip file, as in the actual clippings cart module
* the display of the objects in list form with the possibility of sorting and filtering this list (tbd)
* the transfer of the records in the clippings cart to new functions that visualize this data or analyze it statistically.
Such a function could be for example a link-node-diagram like
[TAM](https://github.com/huhwt/huhwt-wttam) (Topographic Attribute Map) or [Lineage](https://github.com/huhwt/lineage).


<a name="requirements"></a>
## Requirements

This module requires **webtrees** version 2.0.x but not version 2.1.x.
This module has the same general requirements as [webtrees#system-requirements](https://github.com/fisharebest/webtrees#system-requirements).

<a name="installation"></a>
## Installation

This section documents installation instructions for this module.

1. Download the [latest release](https://github.com/huhwt/huhwt-cce20/releases/latest).
3. Unzip the package into your `webtrees/modules_v4` directory of your web server.
4. Occasionally rename the folder to `huhwt-cce20`. It's safe to overwrite the respective directory if it already exists.

<a name="upgrade"></a>
## Upgrade

To update simply replace the huhwt-cce30 files
with the new ones from the latest release.

<a name="translation"></a>
## Translation

You can help to translate this module.
It uses the po/mo system.
You can contribute via a pull request (if you know how) or by e-mail.
Updated translations will be included in the next release of this module.

There are now, beside English and German, no other translations available.

<a name="support"></a>
## Support

<span style="font-weight: bold;">Issues: </span>you can report errors raising an issue
in this GitHub repository.

<span style="font-weight: bold;">Forum: </span>general webtrees support can be found 
at the [webtrees forum](http://www.webtrees.net/)

<a name="thanks"></a>
## Thank you

Special thanks to [hartenthaler](https://github.com/hartenthaler/) for providing this valuable module.

<a name="license"></a>
## License

This module was originally derived from the [Vesta clippings cart](https://github.com/vesta-webtrees-2-custom-modules/vesta_clippings_cart) module.

* Copyright (C) 2022 huhwt - EW.H
* Copyright (C) 2021 Hermann Hartenthaler
* Copyright (C) 2021 Richard Cissée. All rights reserved.
* Derived from **webtrees** - Copyright 2021 webtrees development team.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

* * *
