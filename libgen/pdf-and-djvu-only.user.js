// ==UserScript==
// @name        Only pdf and djvu
// @namespace   Libgen
// @match       https://libgen.*/search.php?*
// @license     AGPLv3
// @grant       none
// @version     1.0
// @author      zsoltiv
// @description 5/1/2022, 9:34:18 PM
// ==/UserScript==

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License,
// or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
// or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License along with this program.
// If not, see <https://www.gnu.org/licenses/>.

'use strict';

const results = document.getElementsByTagName('table')[2].getElementsByTagName('tbody')[0];
let trs = results.getElementsByTagName('tr');
for(let i = 1; i < trs.length; i++) {
    let format = trs[i].getElementsByTagName('td')[8].innerHTML;
    if(format !== 'djvu' && format !== 'pdf')
        trs[i].style.display = 'none';
}
