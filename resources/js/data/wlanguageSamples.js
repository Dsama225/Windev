/** WLanguage code samples from https://windev.com/wlanguage.htm */
export const wlanguageSamples = [
    {
        id: 1,
        title: 'Scanning a document',
        description: 'Saves the document found in the scanner in the "MyPhoto.JPEG" file. The document will be saved in black and white.',
        code: `// Saves the document found in the scanner
IF TwainToBMP("C:\\Temp\\MyPhoto.BMP", False, TwainBlackWhite) = True THEN
    Info("The document was saved")
ELSE
    Error("The document was not scanned")
END`,
    },
    {
        id: 2,
        title: 'Reading a registry key',
        description: 'Reads the "Language" value in the registry key.',
        code: `ResRead is string
ResExecute is boolean
ResExecute = RegistryQueryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\App", "Language", ResRead)
IF ResExecute = True THEN
    Info("The value was read and it is set to: " + ResRead)
END`,
    },
    {
        id: 3,
        title: 'Selecting a color',
        code: `Value is int
SelectionResult is boolean
Value = RGB(10, 17, 69)
Info("Initial color: " + Value)
SelectionResult = SelectColor(Value, scInit)
Info("Final color: " + Value)`,
    },
    {
        id: 4,
        title: 'Calculating the number of days between 2 dates',
        code: `Info(NumToString(DateDifference("19980101", DateSys())) + " days spent")`,
    },
    {
        id: 5,
        title: 'Extracting part of a file path',
        code: `sFilePath is string = "C:\\MyDirectories\\File.psw"
sResFileName is string = fExtractPath(sFilePath, fFileName)
// sResFileName corresponds to "File"`,
    },
    {
        id: 6,
        title: 'Transforms a number into words',
        code: `Info(NumberInWords(83.335))
Info(NumberInWords(1.10, "Euro(s)"))
Info(NumberInWords(1.01, "Euro(s)", "cent(s)"))`,
    },
    {
        id: 7,
        title: 'Sending an email',
        code: `IF EmailStartSession(USER, PASSWORD, "pop3.gmail.com", "smtp.gmail.com") = True THEN
    UserName = USER
ELSE
    Error("Unable to establish the connection")
END
Email.Sender = ""
Email.Recipient[1] = RECIPIENT
Email.NbRecipient = 1
Email.Subject = SUBJECT
Email.Message = TEXT
IF EmailSendMessage(UserName) = False THEN Error() END`,
    },
    {
        id: 8,
        title: 'Adding an icon in the systray',
        code: `ResAddIcon = SysIconAdd("C:\\Icons\\Icon.ICO", "", "Sales 2013")`,
    },
    {
        id: 9,
        title: 'Saving a screen shot',
        code: `ResSave = dSaveImageJPEG(IMG_ImageDrawing, inMemory)`,
    },
    {
        id: 10,
        title: 'Declaring variables',
        code: `Value is int
SelectionResult is boolean
Price is real
x, j, k are int`,
    },
    {
        id: 11,
        title: 'Code / Interface interaction',
        code: `ExecuteProcess(BTN_Save, trtClick)`,
    },
    {
        id: 12,
        title: 'Managing threads by programming',
        code: `sDate is string = DateSys()
ThreadExecute("THREADNAME", threadNormal, "pExecQry", sDate)`,
    },
    {
        id: 13,
        title: 'Print preview',
        code: `iParameterPreview(iButtonNone)
iPreview()
iPrintReport(RPT_MyReport)`,
    },
    {
        id: 14,
        title: 'Printing in HTML',
        code: `MyReportFile is string = fWebDir() + "\\ReportQuery_" + DateSys() + TimeSys() + ".htm"
iDestination(iHTML, MyReportFile)
iPrintReport(RPT_QueryReport)
PageDisplay(fExtractPath(MyReportFile, fFileName + fExtension))`,
    },
    {
        id: 15,
        title: 'Generating a PDF file',
        code: `AFile is string = fWebDir() + "\\" + DateSys() + TimeSys() + ".pdf"
iDestination(iPDF, AFile)
iPrintReport(RPT_InvoicePDF)
FileDisplay(AFile, "application/pdf")
fDelete(AFile)`,
    },
    {
        id: 16,
        title: 'Protecting a PDF file',
        code: `iParameterPDF("opening", "password", iProtectionPrinting + iProtectionSelection)
iPreview(iPDF, "MyPDF.PDF")
iCreateFont(1, 16, iBold, iRoman)
iPrintWord("First line of my PDF" + CR + "Second line of my PDF")
iEndPrinting()
ShellExecute(iLastFile())`,
    },
    {
        id: 17,
        title: 'Selecting a PCL printer (mobile)',
        code: `iDestination(iPCL, "\\\\MyNetwork\\MyPrinter")`,
    },
    {
        id: 18,
        title: 'Print in PCL format (mobile)',
        code: `iDestination(iPCL, "\\MyDocuments\\MyFile.PCL")`,
    },
    {
        id: 19,
        title: 'Dialing a phone number',
        code: `IF tapiDial(EDT_PhoneNumber, "LineStatus") = True THEN
    Info("Click OK to hang up")
    tapiHangUp()
END`,
    },
    {
        id: 20,
        title: 'Financial calculations',
        code: `ResInterestRate = FinInterestRate(6, -5000, 25000)`,
    },
    {
        id: 21,
        title: 'Reading a text file line by line',
        code: `LOOP
    ALine = fReadLine(FileNum)
    IF ALine = EOT THEN BREAK
    ProcessLine(ALine)
END`,
    },
    {
        id: 22,
        title: 'Exit according to a WHILE condition',
        code: `WHILE Keyword <> ""
    nb = nb + 1
    Keyword = ExtractString(MyList, nb + 1, CR)
END`,
    },
    {
        id: 23,
        title: 'Exit according to an iteration',
        code: `LOOP (10)
    ALine = fReadLine(FileNum)
    ProcessLine(ALine)
END`,
    },
    {
        id: 24,
        title: 'Export to Excel',
        code: `sFile = fSelect("", "", "Choose the export file", "Excel files (*.xls) *.xls", "xls", fselCreate + fselExist)
IF sFile <> "" THEN TableToWord(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 25,
        title: 'Export to XML',
        code: `sFile = fSelect("", "", "Choose the export file", "XML files (*.XML) *.xml", "xml", fselCreate + fselExist)
IF sFile <> "" THEN TableToXML(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 26,
        title: 'Export to Word',
        code: `sFile = fSelect("", "", "Choose the export file", "Word files (*.rtf) *.rtf", "rtf", fselCreate + fselExist)
IF sFile <> "" THEN TableToWord(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 27,
        title: 'Sending an SMS',
        code: `SMS.Number = "0610203040"
SMS.Message = "I am sending SMSs with WINDEV Mobile!"
IF SMSSend() = False THEN Error(ErrorInfo(errMessage)) END`,
    },
    {
        id: 28,
        title: 'Sending a fax',
        code: `ConnectID = FaxConnect()
IF ConnectID = 0 THEN
    Error("The connection to the fax server failed.")
ELSE
    ListAdd(LIST_FaxSend, FaxOutbox(ConnectID))
END`,
    },
    {
        id: 29,
        title: 'Acquisition on the serial port',
        description: 'This code is generated by a wizard — you do not even have to type it.',
        code: `Result1 = sOpen(1, 2000, 2000)
IF Result1 = True THEN
    sParameter(1, 9600, 1, 8, 0)
    // ...
    sClose(1)
ELSE
    Error("Error while opening COM1")
END`,
    },
];
