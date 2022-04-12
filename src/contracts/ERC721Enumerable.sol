// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721.sol";

// import "./interfaces/IERC721Enumerable.sol";

contract ERC721Enumerable is ERC721 {
    uint256[] private _allTokens;

    //mapping from tokenId to position in _allTokens array

    mapping(uint256 => uint256) private _allTokensIndex;

    //mapping of owener to list all owner token ids

    mapping(address => uint256[]) private _ownedTokens;

    // mapping from token ID to index of the owner token list

    mapping(uint256 => uint256) private _ownedTokensIndex;

    // constructor() {
    //     _registerInterface(
    //         bytes4(
    //             keccak256("totalSupply(bytes4)") ^
    //                 keccak256("tokenByIndex(bytes4)") ^
    //                 keccak256("tokenOfOwnerByIndex(bytes4)")
    //         )
    //     );
    // }

    function _mint(address to, uint256 tokenId) internal override(ERC721) {
        super._mint(to, tokenId);

        _addTokensToAllTokenEnumeration(tokenId);
        _addTokensToOwnerEnumeration(to, tokenId);
    }

    // add tokens to the _allTokens array and set the position of the token indexes

    function _addTokensToAllTokenEnumeration(uint256 tokenId) private {
        _allTokensIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    function _addTokensToOwnerEnumeration(address to, uint256 tokenId) private {
        // add address and tokenId to the _ownedTokens
        _ownedTokensIndex[tokenId] = _ownedTokens[to].length;
        _ownedTokens[to].push(tokenId);
    }

    function tokenByIndex(uint256 index) public view returns (uint256) {
        // make sure the index is not out of bounds of the total supply
        require(index < totalSupply(), "Global index is out of bounds!");
        return _allTokens[index];
    }

    function tokenOfOwnerByIndex(address owner, uint256 index)
        public
        view
        returns (uint256)
    {
        // make sure the owner index is not out of bounds of the total supply
        require(index < balanceOf(owner), "Owner index is out of bounds!");
        return _ownedTokens[owner][index];
    }

    // return the total supply of the _allTokens array

    /// @notice Count NFTs tracked by this contract
    /// @return A count of valid NFTs tracked by this contract, where each one of
    ///  them has an assigned and queryable owner not equal to the zero address
    function totalSupply() public view returns (uint256) {
        return _allTokens.length;
    }
}
