write-host "======== Step: Creating a config scan folder ========"
# Creating Appscan Source script file. It is used with AppScanSrcCli to run scans reading folder content and selecting automatically the language (Open Folder command).
  write-output "login" > script.scan
  write-output "of `"$env:WorkingDirectory\$env:compiledArtifactFolder`"" >> script.scan
  write-output "sc `"$env:aseAppName-$env:BuildNumber.ozasmt`" -scanconfig `"$env:scanConfig`" -name `"$env:aseAppName-$env:BuildNumber`"" >> script.scan
  write-output "report Findings pdf-detailed `"$env:aseAppName-$env:BuildNumber.pdf`" `"$env:aseAppName-$env:BuildNumber.ozasmt`" -includeSrcBefore:5 -includeSrcAfter:5 -includeTrace:definitive -includeTrace:suspect -includeHowToFix" >> script.scan
  write-output "pa `"$env:aseAppName-$env:BuildNumber.ozasmt`"" >> script.scan
  write-output "exit" >> script.scan
  
  write-host "Config file created for compiled folder $env:WorkingDirectory\$env:compiledArtifactFolder."
}
else{
  write-output "login" > script.scan
# write-output "of `"$env:WorkingDirectory`"" >> script.scan
  write-output "RUNAS AUTO" >> script.scan
  write-output "oa $source -appserver_type $appserver_type -no_ear_project" >> script.scan
  write-output "report Findings pdf-detailed `"$env:aseAppName-$env:BuildNumber.pdf`" `"$env:aseAppName-$env:BuildNumber.ozasmt`" -includeSrcBefore:5 -includeSrcAfter:5 -includeTrace:definitive -includeTrace:suspect -includeHowToFix" >> script.scan
  write-output "pa `"$env:aseAppName-$env:BuildNumber.ozasmt`"" >> script.scan
  write-output "exit" >> script.scan
  
  write-host "Config file created (source code only scan)."
}

    - $env:Path = "C:\Program Files\HCL\AppScanSource\bin;$env:Path"
    - echo "login_file appscandemo $token -acceptssl" > c:\temp\cli_script_scan_dynamic.script
    - echo "RUNAS AUTO" >> c:\temp\cli_script_scan_dynamic.script
    - echo "oa $source -appserver_type $appserver_type -no_ear_project" >> c:\temp\cli_script_scan_dynamic.script
    - echo "ra "C:\temp\altoromutual.war.ozasmt" -scanconfig "Normal scan"" >> c:\temp\cli_script_scan_dynamic.script
    - echo "exit" >> c:\temp\cli_script_scan_dynamic.script
    - AppScanSrcCli.exe script c:\temp\cli_script_scan_dynamic.script
