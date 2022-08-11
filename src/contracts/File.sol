pragma ever-solidity >=0.51.2;

contract File {
	uint static salt; // random number for unique file id

	function upload(
		string file_name,
		string file_size,
		string file_type
	) public pure {
		tvm.accept();
		file_name;
		file_size;
		file_type;
	}

	function uploadChunk(string chunk, string chunkNumber) public pure {
		tvm.accept();
		chunk;
		chunkNumber;
	}
}
