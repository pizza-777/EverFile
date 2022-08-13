pragma ever-solidity >=0.61.2;
pragma copyleft 0, 0x70da6d4b6b3ab29f418aabffa3a630de48de9e9f2659030329dee11ea656b77f;

contract File {
	uint256 static salt; // random number for unique file id
	address public static sender; // return change after all to this guy

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

	function returnChange() public {
		tvm.accept();
		selfdestruct(sender);		
	}
}
