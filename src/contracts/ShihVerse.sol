// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./ERC721Connector.sol";

contract ShihVerse_nft is ERC721Connector {
    //array to store NFT's
    string[] public ShihVerse;

    mapping(string => bool) _ShihVerseExists;

    function mint(string memory _ShihVerse) public {
        require(!_ShihVerseExists[_ShihVerse], "Error NFT already exists");
        ShihVerse.push(_ShihVerse);
        uint256 _id = ShihVerse.length - 1;

        _mint(msg.sender, _id);

        _ShihVerseExists[_ShihVerse] = true;
    }

    constructor() ERC721Connector("ShihVerse_nft", "SHIH") {}
}
