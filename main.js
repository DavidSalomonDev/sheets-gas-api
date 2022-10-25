import { spreadsheet } from "./src/helpers/variables";

globalThis.doGet = () => {
	const service = ContentService;
	const response = [{ status: "cool", name: "david" }];

	return service
		.createTextOutput(JSON.stringify(response))
		.setMimeType(service.MimeType.JSON);
};

globalThis.doPost = (e) => {
	const body = e.postData.contents;
	const bodyJson = JSON.parse(body);
	const ss = SpreadsheetApp.openById(spreadsheet.id);
	const ws = ss.getSheetByName(spreadsheet.tabName);
	ws.appendRow([bodyJson.name]);
};
