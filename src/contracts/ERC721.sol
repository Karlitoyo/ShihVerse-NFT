// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ERC721 {
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );

    // Mapping from token id to the owner
    mapping(uint256 => address) private _tokenOwner;

    // Mapping from owner to number of owned tokens
    mapping(address => uint256) private _OwnedTokensCount;

    function _exists(uint256 tokenId) internal view returns (bool) {
        // setting the address of the nft owner to check the mapping
        // of the address from tokenOwner to the tokenId
        address owner = _tokenOwner[tokenId];
        // returns truth that address is not zero
        return owner != address(0);
    }

    function _mint(address to, uint256 tokenId) internal {
        // requires the address isn't zero
        require(to != address(0), "ERC721: minting to a zero address");
        // requires the token does not already exits
        require(!_exists(tokenId), "ERC721: token already minted");
        // add's a new address with a token id for minting
        _tokenOwner[tokenId] = to;
        // keeping track of each address that is minting and adding one
        _OwnedTokensCount[to] += 1;

        emit Transfer(address(0), to, tokenId);
    }
}
