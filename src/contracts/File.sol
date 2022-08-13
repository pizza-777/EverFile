pragma ever-solidity >=0.61.2;

contract File {
  uint256 static salt; // random number for unique file id
  address public static sender; // return change after all to this guy

  string oldHash = '0';

  modifier checkSender(string newHash, string oldSecret) {
    if (oldHash != '0') {
      require(oldHash == format('{}', tvm.hash(oldSecret)), 102, 'oldSecret is not correct');
    }
    oldHash = newHash;
    _;
  }

  function upload(
    string file_name,
    string file_size,
    string file_type,
    string newHash,
    string oldSecret
  ) public pure checkSender(newHash, oldSecret) {
    tvm.accept();
    file_name;
    file_size;
    file_type;
  }

  function uploadChunk(
    string chunk,
    string chunkNumber,
    string newHash,
    string oldSecret
  ) public pure checkSender(newHash, oldSecret) {
    tvm.accept();
    chunk;
    chunkNumber;
  }

  function returnChange(string newHash, string oldSecret) public checkSender(newHash, oldSecret) {
    tvm.accept();
    selfdestruct(sender);
  }
}
