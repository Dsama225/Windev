/** WLanguage code samples from https://windev.com/wlanguage.htm */
export const wlanguageSamples = [
    {
        id: 1,
        title: 'Numérisation d\'un document',
        docUrl: 'https://doc.windev.com/en-US/?3078009&name=twaintojpeg_function',
        description: 'Enregistre le document trouvé dans le scanner dans le fichier « MyPhoto.JPEG ». Le document sera enregistré en noir et blanc.',
        code: `// Enregistre le document trouvé dans le scanner
// Le document sera enregistré en noir et blanc
IF TwainToBMP("C:\\Temp\\MyPhoto.BMP", False, TwainBlackWhite) = True THEN
    Info("Le document a été enregistré")
ELSE
    Error("Le document n'a pas été numérisé")
END`,
    },
    {
        id: 2,
        title: 'Lecture d\'une clé de registre',
        docUrl: 'https://doc.windev.com/en-US/?3065012&name=registryqueryvalue_function',
        description: 'Lit la valeur « Language » dans la clé « HKEY_LOCAL_MACHINE\\SOFTWARE\\App ». ResExecute indique si la valeur a été lue.',
        code: `ResRead = RegistryQueryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\App", "Language", ResExecute)

IF ResExecute = True THEN
    Info("La valeur a été lue et vaut : " + ResRead)
END`,
    },
    {
        id: 3,
        title: 'Sélection d\'une couleur',
        docUrl: 'https://doc.windev.com/en-US/?3013045&name=selectcolor_function',
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
        docUrl: 'https://doc.windev.com/en-US/?3027001&name=datedifference_function',
        code: `// Affiche le nombre de jours écoulés depuis le 01/01/1998
Info(NumToString(DateDifference("19980101", DateSys())) + " jours écoulés")`,
    },
    {
        id: 5,
        title: 'Extraction d\'une partie d\'un chemin de fichier',
        docUrl: 'https://doc.windev.com/en-US/?3036026&name=fextractpath_function',
        code: `sFilePath is string
sResFileName is string

sFilePath = "C:\\MyDirectories\\File.psw"

// Récupère le nom du fichier
sResFileName = fExtractPath(sFilePath, fFileName)
// sResFileName correspond à "File"`,
    },
    {
        id: 6,
        title: 'Transformation d\'un nombre en lettres',
        docUrl: 'https://doc.windev.com/en-US/?1000020632&name=numberinwords_function',
        code: `Info(NumberInWords(83.335))
// Affiche "quatre-vingt-trois virgule trente-quatre"

Info(NumberInWords(1.10, "Euro(s)"))
// Affiche "un Euro dix"

Info(NumberInWords(1.01, "Euro(s)", "cent(s)"))
// Affiche "un Euro et un cent"`,
    },
    {
        id: 7,
        title: 'Envoi d\'un e-mail',
        docUrl: 'https://doc.windev.com/en-US/?1000003032005&name=EmailSendMessage',
        code: `IF EmailStartSession(USER, PASSWORD, "pop3.gmail.com", ...
    "smtp.gmail.com") = True THEN
    UserName = USER
ELSE
    UserName = ""
    Error("Impossible d'établir la connexion")
END

Email.Sender = "<user@pcsoft.fr>"
Email.Recipient[1] = RECIPIENT
Email.NbRecipient = 1
Email.Subject = SUBJECT
Email.Message = TEXT
Email.NbAttach = 0

IF EmailSendMessage(UserName) = False THEN
    Error()
END`,
    },
    {
        id: 8,
        title: 'Ajout d\'une icône dans la barre des tâches',
        docUrl: 'https://doc.windev.com/en-US/?3073001&name=sysiconadd_function',
        code: `// Ajoute l'icône "C:\\Icons\\Icon.ICO" dans la barre des tâches
ResAddIcon = SysIconAdd("C:\\Icons\\Icon.ICO", "", "Ventes 2013")`,
    },
    {
        id: 9,
        title: 'Enregistrement d\'une capture d\'écran',
        docUrl: 'https://doc.windev.com/en-US/?3029038&name=dsaveimagejpeg_function',
        code: `// Enregistre en mémoire l'image présente dans "IMG_ImageDrawing"
ResSave = dSaveImageJPEG(IMG_ImageDrawing, inMemory)`,
    },
    {
        id: 10,
        title: 'Déclaration de variables',
        docUrl: 'https://doc.windev.com/en-US/?1514032',
        code: `// Déclaration de variables
Value is int
SelectionResult is boolean
Price is real
x, j, k are int`,
    },
    {
        id: 11,
        title: 'Interaction code / interface',
        docUrl: 'https://doc.windev.com/en-US/?3013031&name=executeprocess_function',
        code: `// Exécute le code clic d'un bouton
ExecuteProcess(BTN_Save, trtClick)`,
    },
    {
        id: 12,
        title: 'Gestion des threads par programmation',
        docUrl: 'https://doc.windev.com/en-US/?3077024&name=threadexecute_function',
        code: `// Exécute un thread en lui passant des paramètres
sDate is string
sDate = DateSys()
ThreadExecute("THREADNAME", threadNormal, "pExecQry", sDate)

PROCEDURE pExecQry(sDate)
IF HExecuteQuery(Del_Date, hQueryDefault, sDate) = False THEN
    Error(HErrorInfo())
ELSE
    HReadFirst(Del_Date)
END`,
    },
    {
        id: 13,
        title: 'Aperçu avant impression',
        docUrl: 'https://doc.windev.com/en-US/?3046001&name=iparameterpreview_function',
        code: `// Aucun bouton dans l'aperçu
iParameterPreview(iButtonNone)
iPreview()
iPrintReport(RPT_MyReport)`,
    },
    {
        id: 14,
        title: 'Impression en HTML',
        docUrl: 'https://doc.windev.com/en-US/?1000003046032&name=iPrintReport',
        code: `MyReportFile is string = fWebDir() + "\\" + "ReportQuery_" + DateSys() + TimeSys() + ".htm"
iDestination(iHTML, MyReportFile)
iPrintReport(RPT_QueryReport)
NameGeneratedFile is string = fExtractPath(MyReportFile, fFileName + fExtension)
PageDisplay(NameGeneratedFile)`,
    },
    {
        id: 15,
        title: 'Génération d\'un fichier PDF',
        docUrl: 'https://doc.windev.com/en-US/?1011015&name=Report_displayed_in_the_browser_in_PDF_format',
        code: `AFile is string = fWebDir() + "\\" + DateSys() + TimeSys() + ".pdf"
iDestination(iPDF, AFile)
iPrintReport(RPT_InvoicePDF)
FileDisplay(AFile, "application/pdf")
fDelete(AFile)`,
    },
    {
        id: 16,
        title: 'Protection d\'un fichier PDF',
        docUrl: 'https://doc.windev.com/en-US/?1000003046007&name=iParameterPDF',
        code: `// Dans cet exemple, le mot de passe est "password"
iParameterPDF("opening", "password", iProtectionPrinting + iProtectionSelection)
iPreview(iPDF, "MyPDF.PDF")
iCreateFont(1, 16, iBold, iRoman)
iPrintWord("Première ligne de mon PDF" + CR + "Deuxième ligne de mon PDF" + ...
    CR + "Dernière ligne de mon PDF")
iEndPrinting()
ShellExecute(iLastFile())`,
    },
    {
        id: 17,
        title: 'Sélection d\'une imprimante PCL (mobile)',
        docUrl: 'https://doc.windev.com/en-US/?3046074&name=idestination_function',
        code: `iDestination(iPCL, "\\\\MyNetwork\\MyPrinter")`,
    },
    {
        id: 18,
        title: 'Impression au format PCL (mobile)',
        docUrl: 'https://doc.windev.com/en-US/?3046058&name=step_4_starting_the_print',
        code: `iDestination(iPCL, "\\MyDocuments\\MyFile.PCL")`,
    },
    {
        id: 19,
        title: 'Composition d\'un numéro de téléphone',
        docUrl: 'https://doc.windev.com/en-US/?3076013&name=tapidial_function',
        code: `IF tapiDial(EDT_PhoneNumber, "LineStatus") = True THEN
    Info("Cliquez sur OK pour raccrocher")
    tapiHangUp()
END

PROCEDURE TestLineStatus(ValueLineStatus is int)
SWITCH ValueLineStatus
    CASE tapiLineBusy: Message("La ligne est occupée")
    CASE tapiLineConnected: Message("OK, connecté")
    CASE tapiLineDialing: Message("Numérotation en cours")
    CASE tapiLineDialTone: Message("Ton de numérotation")
    CASE tapiLineDisconnected: Message("Le correspondant a raccroché")
    CASE tapiLineProceeding: Message("Recherche de votre correspondant")
    CASE tapiLineRingBack: Message("Sonnerie")
END`,
    },
    {
        id: 20,
        title: 'Calculs financiers',
        docUrl: 'https://doc.windev.com/en-US/?3050047&name=fininterestrate_function',
        code: `// Taux d'intérêt pour un prêt de 25 000 Euros. Six mensualités
// de 5 000 Euros sont nécessaires pour rembourser le prêt.
ResInterestRate = FinInterestRate(6, -5000, 25000)`,
    },
    {
        id: 21,
        title: 'Lecture d\'un fichier texte ligne par ligne',
        docUrl: 'https://doc.windev.com/en-US/?1510004&name=loop_statement',
        code: `// Sortie selon une condition IF
LOOP
    ALine = fReadLine(FileNum)
    IF ALine = EOT THEN BREAK
    ProcessLine(ALine)
END`,
    },
    {
        id: 22,
        title: 'Sortie selon une condition WHILE',
        docUrl: 'https://doc.windev.com/en-US/?1510010&name=while_statement',
        code: `MyList = INIRead("Examples", "", "", INIFile)
Keyword = ExtractString(MyList, nb, CR)
WHILE Keyword <> ""
    nb = nb + 1
    ExplName = INIRead("Projects installed", Keyword, "", INIFile)
    Keyword = ExtractString(MyList, nb + 1, CR)
END`,
    },
    {
        id: 23,
        title: 'Sortie selon une itération',
        docUrl: 'https://doc.windev.com/en-US/?1510004&name=loop_statement',
        code: `// Sortie selon une itération
LOOP (10)
    ALine = fReadLine(FileNum)
    ProcessLine(ALine)
END`,
    },
    {
        id: 24,
        title: 'Export vers Excel',
        docUrl: 'https://doc.windev.com/en-US/?3074033&name=tabletoexcel_function',
        code: `sFile is string
sFile = fSelect("", "", "Choisissez le fichier d'export", ...
    "Fichiers Excel (*.xls) *.xls", "xls", fselCreate + fselExist)
IF sFile <> "" THEN TableToWord(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 25,
        title: 'Export vers XML',
        docUrl: 'https://doc.windev.com/en-US/?3074037&name=tabletoxml_function',
        code: `sFile is string
sFile = fSelect("", "", "Choisissez le fichier d'export", ...
    "Fichiers XML (*.XML) *.xml", "xml", fselCreate + fselExist)
IF sFile <> "" THEN TableToXML(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 26,
        title: 'Export vers Word',
        docUrl: 'https://doc.windev.com/en-US/?3074036&name=tabletoword_function',
        code: `sFile is string
sFile = fSelect("", "", "Choisissez le fichier d'export", ...
    "Fichiers Word (*.rtf) *.rtf", "rtf", fselCreate + fselExist)
IF sFile <> "" THEN TableToWord(TABLE_TABLE1, sFile, taNoTitle)`,
    },
    {
        id: 27,
        title: 'Envoi d\'un SMS',
        docUrl: 'https://doc.windev.com/en-US/?3068002&name=smssend_function',
        code: `SMS.Number = "0610203040"
SMS.Message = "J'envoie des SMS avec WINDEV Mobile !"
ResSend is boolean = SMSSend()
IF ResSend = False THEN
    Error(ErrorInfo(errMessage))
END`,
    },
    {
        id: 28,
        title: 'Envoi d\'un fax',
        docUrl: 'https://doc.windev.com/en-US/?3037012&name=faxrestart_function',
        code: `ConnectID is int
ConnectID = FaxConnect()
IF ConnectID = 0 THEN
    Error("La connexion au serveur fax a échoué." + ...
        "Vérifiez qu'il a été démarré", ...
        ErrorInfo(errSystemMessage))
ELSE
    ListAdd(LIST_FaxSend, FaxOutbox(ConnectID))
END
...
IF FaxStatus(LIST_FaxSend..DisplayedValue) = FaxStatusHandled THEN
    FaxRestart(LIST_FaxSend..DisplayedValue)
END
...
FaxDisconnect(ConnectID)`,
    },
    {
        id: 29,
        title: 'Acquisition sur le port série',
        docUrl: 'https://doc.windev.com/en-US/?3062011&name=sparameter_function',
        description: 'Ce code est généré par un assistant — vous n\'avez même pas à le saisir !',
        code: `Result1 = sOpen(1, 2000, 2000) // Ouvre COM1
IF Result1 = True THEN
    // Configure Com1 : débit 9600, parité paire,
    // 8 bits de données, 1 bit d'arrêt
    sParameter(1, 9600, 1, 8, 0) // Configure COM1
    // Suite du traitement...
    sClose(1) // Ferme COM1
ELSE
    Error("Erreur lors de l'ouverture de COM1")
END`,
    },
];
