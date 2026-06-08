/** WLanguage code samples from https://windev.com/wlanguage.htm */
export const wlanguageSamples = [
    {
        id: 1,
        title: 'Numérisation d\'un document',
        description: 'Enregistre le document trouvé dans le scanner dans le fichier « MyPhoto.JPEG ». Le document sera enregistré en noir et blanc.',
        code: `// Enregistre le document trouvé dans le scanner
IF TwainToBMP("C:\\Temp\\MyPhoto.BMP", False, TwainBlackWhite) = True THEN
    Info("Le document a été enregistré")
ELSE
    Error("Le document n'a pas été numérisé")
END`,
    },
    {
        id: 2,
        title: 'Lecture d\'une clé de registre',
        description: 'Lit la valeur « Language » dans la clé de registre.',
        code: `ResRead is string
ResExecute is boolean
ResExecute = RegistryQueryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\App", "Language", ResRead)
IF ResExecute = True THEN
    Info("La valeur a été lue et vaut : " + ResRead)
END`,
    },
    {
        id: 3,
        title: 'Sélection d\'une couleur',
        code: `Value is int
SelectionResult is boolean
Value = RGB(10, 17, 69)
Info("Couleur initiale : " + Value)
SelectionResult = SelectColor(Value, scInit)
Info("Couleur finale : " + Value)`,
    },
    {
        id: 4,
        title: 'Calcul du nombre de jours entre 2 dates',
        code: `Info(NumToString(DateDifference("19980101", DateSys())) + " jours écoulés")`,
    },
    {
        id: 5,
        title: 'Extraction d\'une partie d\'un chemin de fichier',
        code: `sFilePath is string = "C:\\MyDirectories\\File.psw"
sResFileName is string = fExtractPath(sFilePath, fFileName)
// sResFileName correspond à "File"`,
    },
    {
        id: 6,
        title: 'Transformation d\'un nombre en lettres',
        code: `Info(NumberInWords(83.335))
Info(NumberInWords(1.10, "Euro(s)"))
Info(NumberInWords(1.01, "Euro(s)", "cent(s)"))`,
    },
    {
        id: 7,
        title: 'Envoi d\'un e-mail',
        code: `IF EmailStartSession(USER, PASSWORD, "pop3.gmail.com", "smtp.gmail.com") = True THEN
    UserName = USER
ELSE
    Error("Impossible d'établir la connexion")
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
        title: 'Ajout d\'une icône dans la barre des tâches',
        code: `ResAddIcon = SysIconAdd("C:\\Icons\\Icon.ICO", "", "Ventes 2013")`,
    },
    {
        id: 9,
        title: 'Enregistrement d\'une capture d\'écran',
        code: `ResSave = dSaveImageJPEG(IMG_ImageDrawing, inMemory)`,
    },
    {
        id: 10,
        title: 'Déclaration de variables',
        code: `Value is int
SelectionResult is boolean
Price is real
x, j, k are int`,
    },
    {
        id: 11,
        title: 'Interaction code / interface',
        code: `ExecuteProcess(BTN_Save, trtClick)`,
    },
    {
        id: 12,
        title: 'Gestion des threads par programmation',
        code: `sDate is string = DateSys()
ThreadExecute("THREADNAME", threadNormal, "pExecQry", sDate)`,
    },
    {
        id: 13,
        title: 'Aperçu avant impression',
        code: `iParameterPreview(iButtonNone)
iPreview()
iPrintReport(RPT_MyReport)`,
    },
    {
        id: 14,
        title: 'Impression en HTML',
        code: `MyReportFile is string = fWebDir() + "\\ReportQuery_" + DateSys() + TimeSys() + ".htm"
iDestination(iHTML, MyReportFile)
iPrintReport(RPT_QueryReport)
PageDisplay(fExtractPath(MyReportFile, fFileName + fExtension))`,
    },
    {
        id: 15,
        title: 'Génération d\'un fichier PDF',
        code: `AFile is string = fWebDir() + "\\" + DateSys() + TimeSys() + ".pdf"
iDestination(iPDF, AFile)
iPrintReport(RPT_InvoicePDF)
FileDisplay(AFile, "application/pdf")
fDelete(AFile)`,
    },
    {
        id: 16,
        title: 'Protection d\'un fichier PDF',
        code: `iParameterPDF("opening", "password", iProtectionPrinting + iProtectionSelection)
iPreview(iPDF, "MyPDF.PDF")
iCreateFont(1, 16, iBold, iRoman)
iPrintWord("Première ligne de mon PDF" + CR + "Deuxième ligne de mon PDF")
iEndPrinting()
ShellExecute(iLastFile())`,
    },
    {
        id: 17,
        title: 'Sélection d\'une imprimante PCL (mobile)',
        code: `iDestination(iPCL, "\\\\MyNetwork\\MyPrinter")`,
    },
    {
        id: 18,
        title: 'Impression au format PCL (mobile)',
        code: `iDestination(iPCL, "\\MyDocuments\\MyFile.PCL")`,
    },
    {
        id: 19,
        title: 'Composition d\'un numéro de téléphone',
        code: `IF tapiDial(EDT_PhoneNumber, "LineStatus") = True THEN
    Info("Cliquez sur OK pour raccrocher")
    tapiHangUp()
END`,
    },
    {
        id: 20,
        title: 'Calculs financiers',
        code: `ResInterestRate = FinInterestRate(6, -5000, 25000)`,
    },
    {
        id: 21,
        title: 'Lecture d\'un fichier texte ligne par ligne',
        code: `LOOP
    ALine = fReadLine(FileNum)
    IF ALine = EOT THEN BREAK
    ProcessLine(ALine)
END`,
    },
    {
        id: 22,
        title: 'Sortie selon une condition WHILE',
        code: `WHILE Keyword <> ""
    nb = nb + 1
    Keyword = ExtractString(MyList, nb + 1, CR)
END`,
    },
    {
        id: 23,
        title: 'Sortie selon une itération',
        code: `LOOP (10)
    ALine = fReadLine(FileNum)
    ProcessLine(ALine)
END`,
    },
    {
        id: 24,
        title: 'Export vers Excel',
        code: `sFile = fSelect("", "", "Choisissez le fichier d'export", "Fichiers Excel (*.xls) *.xls", "xls", fselCreate + fselExist)
IF sFile <> "" THEN TableToWord(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 25,
        title: 'Export vers XML',
        code: `sFile = fSelect("", "", "Choisissez le fichier d'export", "Fichiers XML (*.XML) *.xml", "xml", fselCreate + fselExist)
IF sFile <> "" THEN TableToXML(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 26,
        title: 'Export vers Word',
        code: `sFile = fSelect("", "", "Choisissez le fichier d'export", "Fichiers Word (*.rtf) *.rtf", "rtf", fselCreate + fselExist)
IF sFile <> "" THEN TableToWord(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 27,
        title: 'Envoi d\'un SMS',
        code: `SMS.Number = "0610203040"
SMS.Message = "J'envoie des SMS avec WINDEV Mobile !"
IF SMSSend() = False THEN Error(ErrorInfo(errMessage)) END`,
    },
    {
        id: 28,
        title: 'Envoi d\'un fax',
        code: `ConnectID = FaxConnect()
IF ConnectID = 0 THEN
    Error("La connexion au serveur fax a échoué.")
ELSE
    ListAdd(LIST_FaxSend, FaxOutbox(ConnectID))
END`,
    },
    {
        id: 29,
        title: 'Acquisition sur le port série',
        description: 'Ce code est généré par un assistant — vous n\'avez même pas à le saisir.',
        code: `Result1 = sOpen(1, 2000, 2000)
IF Result1 = True THEN
    sParameter(1, 9600, 1, 8, 0)
    // ...
    sClose(1)
ELSE
    Error("Erreur lors de l'ouverture de COM1")
END`,
    },
];
