//! Generated models by Fern

pub mod type_admin-test;
pub mod type_commons-userid;
pub mod type_commons-problemid;
pub mod type_commons-nodeid;
pub mod type_commons-variabletype;
pub mod type_commons-listtype;
pub mod type_commons-maptype;
pub mod type_commons-variablevalue;
pub mod type_commons-debugvariablevalue;
pub mod type_commons-genericvalue;
pub mod type_commons-mapvalue;
pub mod type_commons-keyvaluepair;
pub mod type_commons-binarytreevalue;
pub mod type_commons-binarytreenodevalue;
pub mod type_commons-binarytreenodeandtreevalue;
pub mod type_commons-singlylinkedlistvalue;
pub mod type_commons-singlylinkedlistnodevalue;
pub mod type_commons-singlylinkedlistnodeandlistvalue;
pub mod type_commons-doublylinkedlistvalue;
pub mod type_commons-doublylinkedlistnodevalue;
pub mod type_commons-doublylinkedlistnodeandlistvalue;
pub mod type_commons-debugmapvalue;
pub mod type_commons-debugkeyvaluepairs;
pub mod type_commons-testcase;
pub mod type_commons-testcasewithexpectedresult;
pub mod type_commons-fileinfo;
pub mod type_commons-language;
pub mod type_lang-server-langserverrequest;
pub mod type_lang-server-langserverresponse;
pub mod type_migration-migrationstatus;
pub mod type_migration-migration;
pub mod type_playlist-playlistid;
pub mod type_playlist-playlist;
pub mod type_playlist-playlistcreaterequest;
pub mod type_playlist-updateplaylistrequest;
pub mod type_playlist-playlistidnotfounderrorbody;
pub mod type_playlist-reservedkeywordenum;
pub mod type_problem-probleminfo;
pub mod type_problem-problemdescription;
pub mod type_problem-problemdescriptionboard;
pub mod type_problem-problemfiles;
pub mod type_problem-variabletypeandname;
pub mod type_problem-createproblemrequest;
pub mod type_problem-createproblemresponse;
pub mod type_problem-updateproblemresponse;
pub mod type_problem-createproblemerror;
pub mod type_problem-genericcreateproblemerror;
pub mod type_problem-getdefaultstarterfilesresponse;
pub mod type_submission-submissionid;
pub mod type_submission-shareid;
pub mod type_submission-submissionrequest;
pub mod type_submission-initializeproblemrequest;
pub mod type_submission-submitrequestv2;
pub mod type_submission-workspacesubmitrequest;
pub mod type_submission-submissionfileinfo;
pub mod type_submission-submissiontypeenum;
pub mod type_submission-stoprequest;
pub mod type_submission-submissionresponse;
pub mod type_submission-codeexecutionupdate;
pub mod type_submission-buildingexecutorresponse;
pub mod type_submission-runningresponse;
pub mod type_submission-runningsubmissionstate;
pub mod type_submission-erroredresponse;
pub mod type_submission-errorinfo;
pub mod type_submission-compileerror;
pub mod type_submission-runtimeerror;
pub mod type_submission-internalerror;
pub mod type_submission-stoppedresponse;
pub mod type_submission-workspaceranresponse;
pub mod type_submission-workspacerundetails;
pub mod type_submission-gradedresponse;
pub mod type_submission-gradedresponsev2;
pub mod type_submission-testcasegrade;
pub mod type_submission-testcasehiddengrade;
pub mod type_submission-testcasenonhiddengrade;
pub mod type_submission-recordedresponsenotification;
pub mod type_submission-recordingresponsenotification;
pub mod type_submission-lightweightstackframeinformation;
pub mod type_submission-testcaseresultwithstdout;
pub mod type_submission-testcaseresult;
pub mod type_submission-actualresult;
pub mod type_submission-exceptionv2;
pub mod type_submission-exceptioninfo;
pub mod type_submission-invalidrequestresponse;
pub mod type_submission-invalidrequestcause;
pub mod type_submission-existingsubmissionexecuting;
pub mod type_submission-submissionidnotfound;
pub mod type_submission-customtestcasesunsupported;
pub mod type_submission-unexpectedlanguageerror;
pub mod type_submission-terminatedresponse;
pub mod type_submission-finishedresponse;
pub mod type_submission-stdoutresponse;
pub mod type_submission-stderrresponse;
pub mod type_submission-traceresponse;
pub mod type_submission-traceresponsev2;
pub mod type_submission-tracedfile;
pub mod type_submission-expressionlocation;
pub mod type_submission-stackinformation;
pub mod type_submission-stackframe;
pub mod type_submission-scope;
pub mod type_submission-executionsessionresponse;
pub mod type_submission-executionsessionstatus;
pub mod type_submission-submissionstatusv2;
pub mod type_submission-testsubmissionstatusv2;
pub mod type_submission-workspacesubmissionstatusv2;
pub mod type_submission-testsubmissionupdate;
pub mod type_submission-testsubmissionupdateinfo;
pub mod type_submission-workspacesubmissionupdate;
pub mod type_submission-workspacesubmissionupdateinfo;
pub mod type_submission-gradedtestcaseupdate;
pub mod type_submission-recordedtestcaseupdate;
pub mod type_submission-workspacetracedupdate;
pub mod type_submission-submissiontypestate;
pub mod type_submission-workspacesubmissionstate;
pub mod type_submission-workspacesubmissionstatus;
pub mod type_submission-testsubmissionstate;
pub mod type_submission-testsubmissionstatus;
pub mod type_submission-submissionstatusfortestcase;
pub mod type_submission-tracedtestcase;
pub mod type_submission-traceresponsespage;
pub mod type_submission-traceresponsespagev2;
pub mod type_submission-gettraceresponsespagerequest;
pub mod type_submission-workspacestarterfilesresponse;
pub mod type_submission-workspacestarterfilesresponsev2;
pub mod type_submission-workspacefiles;
pub mod type_submission-executionsessionstate;
pub mod type_submission-getexecutionsessionstateresponse;
pub mod type_submission-getsubmissionstateresponse;
pub mod type_v2/problem-testcasetemplateid;
pub mod type_v2/problem-testcaseid;
pub mod type_v2/problem-parameterid;
pub mod type_v2/problem-probleminfov2;
pub mod type_v2/problem-lightweightprobleminfov2;
pub mod type_v2/problem-createproblemrequestv2;
pub mod type_v2/problem-testcasev2;
pub mod type_v2/problem-testcaseexpects;
pub mod type_v2/problem-testcaseimplementationreference;
pub mod type_v2/problem-basictestcasetemplate;
pub mod type_v2/problem-testcasetemplate;
pub mod type_v2/problem-testcaseimplementation;
pub mod type_v2/problem-testcasefunction;
pub mod type_v2/problem-testcasewithactualresultimplementation;
pub mod type_v2/problem-voidfunctiondefinition;
pub mod type_v2/problem-parameter;
pub mod type_v2/problem-nonvoidfunctiondefinition;
pub mod type_v2/problem-voidfunctionsignature;
pub mod type_v2/problem-nonvoidfunctionsignature;
pub mod type_v2/problem-voidfunctionsignaturethattakesactualresult;
pub mod type_v2/problem-assertcorrectnesscheck;
pub mod type_v2/problem-deepequalitycorrectnesscheck;
pub mod type_v2/problem-voidfunctiondefinitionthattakesactualresult;
pub mod type_v2/problem-testcaseimplementationdescription;
pub mod type_v2/problem-testcaseimplementationdescriptionboard;
pub mod type_v2/problem-testcasemetadata;
pub mod type_v2/problem-functionimplementationformultiplelanguages;
pub mod type_v2/problem-functionimplementation;
pub mod type_v2/problem-generatedfiles;
pub mod type_v2/problem-customfiles;
pub mod type_v2/problem-basiccustomfiles;
pub mod type_v2/problem-files;
pub mod type_v2/problem-fileinfov2;
pub mod type_v2/problem-defaultprovidedfile;
pub mod type_v2/problem-functionsignature;
pub mod type_v2/problem-getfunctionsignaturerequest;
pub mod type_v2/problem-getfunctionsignatureresponse;
pub mod type_v2/problem-getbasicsolutionfilerequest;
pub mod type_v2/problem-getbasicsolutionfileresponse;
pub mod type_v2/problem-getgeneratedtestcasefilerequest;
pub mod type_v2/problem-getgeneratedtestcasetemplatefilerequest;
pub mod type_v2/v3/problem-testcasetemplateid;
pub mod type_v2/v3/problem-testcaseid;
pub mod type_v2/v3/problem-parameterid;
pub mod type_v2/v3/problem-probleminfov2;
pub mod type_v2/v3/problem-lightweightprobleminfov2;
pub mod type_v2/v3/problem-createproblemrequestv2;
pub mod type_v2/v3/problem-testcasev2;
pub mod type_v2/v3/problem-testcaseexpects;
pub mod type_v2/v3/problem-testcaseimplementationreference;
pub mod type_v2/v3/problem-basictestcasetemplate;
pub mod type_v2/v3/problem-testcasetemplate;
pub mod type_v2/v3/problem-testcaseimplementation;
pub mod type_v2/v3/problem-testcasefunction;
pub mod type_v2/v3/problem-testcasewithactualresultimplementation;
pub mod type_v2/v3/problem-voidfunctiondefinition;
pub mod type_v2/v3/problem-parameter;
pub mod type_v2/v3/problem-nonvoidfunctiondefinition;
pub mod type_v2/v3/problem-voidfunctionsignature;
pub mod type_v2/v3/problem-nonvoidfunctionsignature;
pub mod type_v2/v3/problem-voidfunctionsignaturethattakesactualresult;
pub mod type_v2/v3/problem-assertcorrectnesscheck;
pub mod type_v2/v3/problem-deepequalitycorrectnesscheck;
pub mod type_v2/v3/problem-voidfunctiondefinitionthattakesactualresult;
pub mod type_v2/v3/problem-testcaseimplementationdescription;
pub mod type_v2/v3/problem-testcaseimplementationdescriptionboard;
pub mod type_v2/v3/problem-testcasemetadata;
pub mod type_v2/v3/problem-functionimplementationformultiplelanguages;
pub mod type_v2/v3/problem-functionimplementation;
pub mod type_v2/v3/problem-generatedfiles;
pub mod type_v2/v3/problem-customfiles;
pub mod type_v2/v3/problem-basiccustomfiles;
pub mod type_v2/v3/problem-files;
pub mod type_v2/v3/problem-fileinfov2;
pub mod type_v2/v3/problem-defaultprovidedfile;
pub mod type_v2/v3/problem-functionsignature;
pub mod type_v2/v3/problem-getfunctionsignaturerequest;
pub mod type_v2/v3/problem-getfunctionsignatureresponse;
pub mod type_v2/v3/problem-getbasicsolutionfilerequest;
pub mod type_v2/v3/problem-getbasicsolutionfileresponse;
pub mod type_v2/v3/problem-getgeneratedtestcasefilerequest;
pub mod type_v2/v3/problem-getgeneratedtestcasetemplatefilerequest;
