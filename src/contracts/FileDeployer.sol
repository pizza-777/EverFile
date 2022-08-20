pragma ever-solidity >=0.60.0;
import "./File.sol";

contract FileDeployer {
	TvmCell static fileCode;

	function fileDeploy(uint256 salt, address sender) public view returns (address) {
		tvm.rawReserve(address(this).balance - msg.value, 2);

		TvmCell stateInit = tvm.buildStateInit({
			code: fileCode,
			varInit: {salt: salt, sender: sender},
			contr: File,
			pubkey: 0
		});

		address fileAddress = new File{
			stateInit: stateInit,
			value: 0,
			wid: sender.wid,
			flag: 128
		}();

		return fileAddress;
	}
}
