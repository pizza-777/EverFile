pragma ever-solidity >=0.51.2;
import "./File.sol";

contract FileDeployer {
	TvmCell static fileCode;

	function fileDeploy(uint salt) public view returns (address) {
		tvm.rawReserve(address(this).balance - msg.value, 2);
		
		TvmCell stateInit = tvm.buildStateInit({
			code: fileCode,
			varInit: {salt: salt},
			contr: File,
			pubkey: 0
		});

		address fileAddress = new File{
			stateInit: stateInit,
			value: 0,
			wid: msg.sender.wid,
			flag: 128
		}();

		return fileAddress;
	}
}
