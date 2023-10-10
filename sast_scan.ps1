write-host "======== Step: Creating a config scan folder ========"
# Creating Appscan Source script file. It is used with AppScanSrcCli to run scans reading folder content and selecting automatically the language (Open Folder command).
  write-output "login" > script.scan
  write-output "RUNAS AUTO" >> script.scan
  write-output "oa ".\build\altoromutual.war" -no_ear_project" >> script.scan
  write-output "ra ".\altoromutual.war.ozasmt" -scanconfig "Normal scan"" >> script.scan
  write-output "report Findings pdf-detailed `"altoromutual.pdf`" `"altoromutual.ozasmt`" -includeSrcBefore:5 -includeSrcAfter:5 -includeTrace:definitive -includeTrace:suspect -includeHowToFix" >> script.scan
  write-output "pa `"altoromutual.ozasmt`"" >> script.scan
  write-output "exit" >> script.scan
  write-host "Config file created"
}
