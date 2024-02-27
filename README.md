# COMO CORRER EL PROGRAMA EN REACT NATIVE. 
Hay dos formas de crear un proyecto en React Native, CLI y EXPO. Nosotros para este proyecto usamos CLI.
Fuente: https://youtu.be/8ejuHsaXiwU
## 1. CLI - Prerequisitos
### Instalar Chocolatey.
  1. Abrir el CMD como administrador.
  2. Pegar este comando:
    
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072;     iex ((New-Object         System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
      
### Instalar Nodejs-LTS y JDK11 (aunque ya estén instaladas otras versiones).
  1. Pegar este otro comando: `choco install -y nodejs-lts openjdk11`
### Instalar Android Studio.
  1. Ir a https://developer.android.com/studio (son casi 8GB, tarda bastante).
  2. En el inicio de Android Studio, darle a "more actions" -> SDK Manager -> Show Package Details -> Android 12.0 ("S") -> **Android SDK Platform 31** y **Intel x86_64 Atom System Image**.
  3. Darle a SDK Tools -> Show Package Details -> **31.0.0**
  4. Apply -> tienen que aparecer los 3 componentes -> OK.

### Instalar Java 17
  1. Entrar a [este link](https://www.oracle.com/ar/java/technologies/downloads/#jdk17-windows)
  2. Descargar x64 MSI Installer
  3. Darle que sí a todo e instalar Java.

### Configurar variables de entorno.
  1. En el buscador de Windows poner "variables de entorno".
  2. Darle a "Variables de entorno..."
  3. En "Variables de usuario" darle a "Nuevo"
  4. Nombre: `ANDROID_HOME`
  5. Valor: `C:\Users\TU USUARIO DE WINDOWS\AppData\Local\Android\Sdk`
  6. "Aceptar"
  7. "Nuevo" otra vez
  8. Nombre: `JAVA_HOME`
  9. Valor: `C:\Program Files\Java\jdk-17`
  10. Ahora en "Variable de sistema" dale a "Nuevo" y pegar otra vez `JAVA_HOME` y `C:\Program Files\Java\jdk-17`
  11. En "Variables de sistema" buscar "Path" -> "Editar" -> "Nuevo" -> pegar `C:\Users\TU USUARIO DE WINDOWS\AppData\Local\Android\Sdk\platform-tools`


### Crear un celular para usar de emulador.
  1. Abrir Android Studio
  2. "more actions" -> "Virtual Device Manager"
  3. Puede que aparezca un Pixel_3a con Android 14, ese sería un celular moderno y consume más recursos.
  4. Para emular un celular más viejo, hay que darle al +.
  5. Pixel XL -> Next -> R -> Next -> Finish.
  6. Eliminar el Pixel_3a.
  7. Cerrar Android Studio.

## 2. Correr el proyecto ya creado.
  1. Reiniciar la PC para validar los paths que configuramos antes [IMPORTANTE]
  2. Clonamos el repositorio con el comando `git clone https://github.com/iiriina/GoDeLi-Frontend`
  3. `npm install --force`
  4. `npx react-native start`
  5. En otra terminal, misma ruta: `npx react-native run-android`


## Probar la app en un celular real.
https://reactnative.dev/docs/running-on-device
