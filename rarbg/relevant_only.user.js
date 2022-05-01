// ==UserScript==
// @name        Relevant Results for RARBG
// @namespace   RARBG
// @match       https://rarbg.to/torrents.php?search=*
// @grant       none
// @license     AGPLv3
// @version     1.0
// @author      zsoltiv
// @description Removes results that do not contain the words in the search bar.
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

// CHANGE THIS

// if this is true, all keywords have to be present in the result (case insensitive)
const STRICT = false;

// DO NOT CHANGE THESE

const results = document.getElementsByClassName('lista2');
const search = document.getElementById('searchinput').value.trim();
const keywords = search.split(' ');

for(const result of results) {
    const name = result.innerText.toUpperCase();
    let has_a_keyword = false;

    if(STRICT) {
        // STRICT BEHAVIOUR
        for(const keyword of keywords) {
            if(name.includes(keyword.toUpperCase()))
                has_a_keyword = true;
            else
                has_a_keyword = false;
        }
    } else {
        // DEFAULT BEHAVIOUR
        for(const keyword of keywords) {
            if(name.includes(keyword.toUpperCase()))
                has_a_keyword = true;
        }
    }

    if(!has_a_keyword) {
        result.style.display = 'none';
    }
}
