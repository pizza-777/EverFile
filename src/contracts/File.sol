pragma ever-solidity >=0.60.0;

contract File {
  uint256 static salt; // random number for unique file id
  address public static sender; // return change after all to this guy

  event meta(string file_name, string file_size, string file_type);

  function upload(
    string file_name,
    string file_size,
    string file_type    
  ) public pure {
    tvm.accept();
    emit meta(file_name, file_size, file_type);
  }

  function uploadChunk(
    string chunk,
    string chunkNumber    
  ) public pure {
    tvm.accept();
    chunk;
    chunkNumber;
  }

  function returnChange() public {
    tvm.accept();
    selfdestruct(sender);
  }

  function afterSignatureCheck(TvmSlice body, TvmCell message) private inline returns (TvmSlice) {
    message;
    return body;
  }
}
