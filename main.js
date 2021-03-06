const fs=require('fs');

fs.writeFileSync(require('os').homedir()+'/.m2/settings.xml', '<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"'+
  ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"'+
  ' xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">'+
  '<activeProfiles>'+
    '<activeProfile>github</activeProfile>'+
  '</activeProfiles>'+
  '<profiles>'+
    '<profile>'+
      '<id>github</id>'+
	  '<properties>'+
        '<altDeploymentRepository>github::default::https://maven.pkg.github.com/Unknow0/package</altDeploymentRepository>'+
      '</properties>'+
      '<repositories>'+
        '<repository>'+
          '<id>github</id>'+
          '<url>https://maven.pkg.github.com/Unknow0/package</url>'+
        '</repository>'+
      '</repositories>'+
      '<pluginRepositories>'+
        '<pluginRepository>'+
          '<id>github</id>'+
          '<url>https://maven.pkg.github.com/Unknow0/package</url>'+
        '</pluginRepository>'+
      '</pluginRepositories>'+
    '</profile>'+
  '</profiles>'+
  '<servers>'+
    '<server>'+
      '<id>github</id>'+
      '<username>Unknow0</username>'+
      '<password>${env.GITHUB_TOKEN}</password>'+
    '</server>'+
  '</servers>'+
'</settings>');
