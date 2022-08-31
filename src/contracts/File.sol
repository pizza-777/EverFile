pragma ever-solidity >=0.60.0;
pragma AbiHeader time;
pragma AbiHeader expire;

contract File {
  uint256 static salt; // random number for unique file id
  address public static sender; // return change after all to this guy

  //replay protection
  mapping(uint32 => bool) public chunks; // for chunks
  uint32 public chunksCounter = 0;

  bool isMeta = false;

  event meta(string file_name, string file_size, string file_type);

  function upload(
    string file_name,
    string file_size,
    string file_type
  ) public {
    require(isMeta == false, 102, 'File meta data was set');
    tvm.accept();
    emit meta(file_name, file_size, file_type);
    isMeta = true;
  }

  function uploadChunk(string chunk, string chunkNumber) public {
    uint32 chunkNumberNumeric = uint32(stoi(chunkNumber).get());
    require((chunkNumberNumeric + 1) > ((chunksCounter / 50) * 50), 101, 'Chunk alredy exists');
    require(chunks.exists(chunkNumberNumeric) == false, 101, 'Chunk already exists');
    tvm.accept();
    chunks.add(chunkNumberNumeric, true);
    chunksCounter++;
    if (chunksCounter % 50 == 0) {
      mapping(uint32 => bool) empty;
      chunks = empty;
    }
  }

  function returnChange() public {
    tvm.accept();
    selfdestruct(sender);
  }

  function afterSignatureCheck(TvmSlice body, TvmCell message) private inline returns (TvmSlice) {
    message;
    (uint64 time, uint32 expireAt) = body.decode(uint64, uint32);
    return body;
  }
}
