// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ERC721 {
    mapping(uint256 => address) private _tokenOwner;

    mapping(address => uint256) private _OwnedTokensCount;

    function _exists(uint256 tokenId) internal view returns (bool) {
        address owner = _tokenOwner[tokenId];
        return owner != address(0);
    }

    function _mint(address to, uint256 tokenId) internal {
        require(to != address(0), "ERC721: minting to a zero address");

        _tokenOwner[tokenId] = to;
        _OwnedTokensCount[to] += 1;
    }
}
