pragma ever-solidity >=0.61.2;

contract Utils {
  function hash(string s) public pure returns (uint256) {
    return tvm.hash(s);
  }
}
