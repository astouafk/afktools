// // // lib/services/google-drive-service.ts

// // // Types pour les réponses Google Drive
// // interface DriveFile {
// //     id: string
// //     name: string
// //     webViewLink: string
// //     webContentLink: string
// //   }
  
// //   interface DriveFolder {
// //     id: string
// //     name: string
// //   }
  
// //   // Configuration
// //   const DRIVE_ROOT_FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_FOLDER_ID || ''
// //   const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''
// //   const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  
// //   // Scopes nécessaires
// //   const SCOPES = 'https://www.googleapis.com/auth/drive.file'
  
// //   // Variable globale pour stocker le token d'accès
// //   let accessToken: string | null = null
  
// //   /**
// //    * Initialiser Google API et authentifier l'utilisateur
// //    */
// //   export async function initGoogleDrive(): Promise<void> {
// //     return new Promise((resolve, reject) => {
// //       // Charger la bibliothèque gapi
// //       const script = document.createElement('script')
// //       script.src = 'https://apis.google.com/js/api.js'
// //       script.onload = () => {
// //         window.gapi.load('client:auth2', async () => {
// //           try {
// //             // Initialiser le client
// //             await window.gapi.client.init({
// //               apiKey: GOOGLE_API_KEY,
// //               clientId: GOOGLE_CLIENT_ID,
// //               discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
// //               scope: SCOPES,
// //             })
  
// //             // Vérifier si déjà connecté
// //             const authInstance = window.gapi.auth2.getAuthInstance()
// //             const isSignedIn = authInstance.isSignedIn.get()
  
// //             if (isSignedIn) {
// //               // Récupérer le token d'accès
// //               const user = authInstance.currentUser.get()
// //               accessToken = user.getAuthResponse().access_token
// //               resolve()
// //             } else {
// //               // Demander la connexion
// //               await authInstance.signIn()
// //               const user = authInstance.currentUser.get()
// //               accessToken = user.getAuthResponse().access_token
// //               resolve()
// //             }
// //           } catch (error) {
// //             reject(error)
// //           }
// //         })
// //       }
// //       script.onerror = reject
// //       document.body.appendChild(script)
// //     })
// //   }
  
// //   /**
// //    * Rechercher un dossier par nom dans un dossier parent
// //    */
// //   async function findFolder(folderName: string, parentId: string): Promise<string | null> {
// //     if (!accessToken) {
// //       throw new Error('Not authenticated. Call initGoogleDrive() first.')
// //     }
  
// //     const query = `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${parentId}' in parents and trashed=false`
  
// //     const response = await fetch(
// //       `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name)`,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //       }
// //     )
  
// //     if (!response.ok) {
// //       throw new Error('Failed to search folder')
// //     }
  
// //     const data = await response.json()
    
// //     if (data.files && data.files.length > 0) {
// //       return data.files[0].id
// //     }
  
// //     return null
// //   }
  
// //   /**
// //    * Créer un dossier dans Drive
// //    */
// //   async function createFolder(folderName: string, parentId: string): Promise<string> {
// //     if (!accessToken) {
// //       throw new Error('Not authenticated. Call initGoogleDrive() first.')
// //     }
  
// //     const metadata = {
// //       name: folderName,
// //       mimeType: 'application/vnd.google-apps.folder',
// //       parents: [parentId],
// //     }
  
// //     const response = await fetch('https://www.googleapis.com/drive/v3/files', {
// //       method: 'POST',
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(metadata),
// //     })
  
// //     if (!response.ok) {
// //       throw new Error('Failed to create folder')
// //     }
  
// //     const data = await response.json()
// //     return data.id
// //   }
  
// //   /**
// //    * Obtenir ou créer le dossier de l'entreprise
// //    */
// //   export async function getOrCreateCompanyFolder(companyName: string): Promise<string> {
// //     if (!DRIVE_ROOT_FOLDER_ID) {
// //       throw new Error('NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_FOLDER_ID is not configured')
// //     }
  
// //     // Nettoyer le nom de l'entreprise (enlever caractères spéciaux)
// //     const cleanCompanyName = companyName.replace(/[/\\?%*:|"<>]/g, '-')
  
// //     // Chercher si le dossier existe
// //     let folderId = await findFolder(cleanCompanyName, DRIVE_ROOT_FOLDER_ID)
  
// //     // Si pas trouvé, créer le dossier
// //     if (!folderId) {
// //       folderId = await createFolder(cleanCompanyName, DRIVE_ROOT_FOLDER_ID)
// //     }
  
// //     return folderId
// //   }
  
// //   /**
// //    * Obtenir ou créer un sous-dossier (Rapports ou Analyses)
// //    */
// //   export async function getOrCreateSubFolder(
// //     subFolderName: 'Rapports' | 'Analyses',
// //     parentFolderId: string
// //   ): Promise<string> {
// //     // Chercher si le sous-dossier existe
// //     let folderId = await findFolder(subFolderName, parentFolderId)
  
// //     // Si pas trouvé, créer le sous-dossier
// //     if (!folderId) {
// //       folderId = await createFolder(subFolderName, parentFolderId)
// //     }
  
// //     return folderId
// //   }
  
// //   /**
// //    * Uploader un fichier dans Google Drive
// //    */
// //   export async function uploadFileToDrive(
// //     fileBlob: Blob,
// //     fileName: string,
// //     folderId: string,
// //     mimeType: string
// //   ): Promise<DriveFile> {
// //     if (!accessToken) {
// //       throw new Error('Not authenticated. Call initGoogleDrive() first.')
// //     }
  
// //     // Créer les métadonnées du fichier
// //     const metadata = {
// //       name: fileName,
// //       parents: [folderId],
// //       mimeType: mimeType,
// //     }
  
// //     // Créer FormData pour upload multipart
// //     const formData = new FormData()
// //     formData.append(
// //       'metadata',
// //       new Blob([JSON.stringify(metadata)], { type: 'application/json' })
// //     )
// //     formData.append('file', fileBlob)
  
// //     // Upload
// //     const response = await fetch(
// //       'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink,webContentLink',
// //       {
// //         method: 'POST',
// //         headers: {
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: formData,
// //       }
// //     )
  
// //     if (!response.ok) {
// //       const errorText = await response.text()
// //       throw new Error(`Failed to upload file: ${errorText}`)
// //     }
  
// //     const data = await response.json()
  
// //     return {
// //       id: data.id,
// //       name: data.name,
// //       webViewLink: data.webViewLink,
// //       webContentLink: data.webContentLink,
// //     }
// //   }
  
// //   /**
// //    * Fonction principale pour sauvegarder un export dans Drive
// //    */
// //   export async function saveExportToDrive(
// //     fileBlob: Blob,
// //     fileName: string,
// //     companyName: string,
// //     contentType: 'reports' | 'analyses' | 'both' | 'single-report' | 'blockers',
// //     fileType: 'excel' | 'pdf'
// //   ): Promise<DriveFile> {
// //     // 1. Initialiser Google Drive si pas déjà fait
// //     if (!accessToken) {
// //       await initGoogleDrive()
// //     }
  
// //     // 2. Obtenir ou créer le dossier de l'entreprise
// //     const companyFolderId = await getOrCreateCompanyFolder(companyName)
  
// //     // 3. Déterminer le sous-dossier (Rapports ou Analyses)
// //     let subFolderName: 'Rapports' | 'Analyses' = 'Rapports'
// //     if (contentType === 'analyses') {
// //       subFolderName = 'Analyses'
// //     }
  
// //     // 4. Obtenir ou créer le sous-dossier
// //     const subFolderId = await getOrCreateSubFolder(subFolderName, companyFolderId)
  
// //     // 5. Déterminer le MIME type
// //     const mimeType =
// //       fileType === 'excel'
// //         ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
// //         : 'application/pdf'
  
// //     // 6. Uploader le fichier
// //     const uploadedFile = await uploadFileToDrive(fileBlob, fileName, subFolderId, mimeType)
  
// //     return uploadedFile
// //   }
  
// //   /**
// //    * Déconnecter l'utilisateur de Google Drive
// //    */
// //   export function signOutGoogleDrive(): void {
// //     if (window.gapi && window.gapi.auth2) {
// //       const authInstance = window.gapi.auth2.getAuthInstance()
// //       if (authInstance) {
// //         authInstance.signOut()
// //         accessToken = null
// //       }
// //     }
// //   }





// // lib/services/google-drive-service.ts

// interface DriveFile {
//     id: string
//     name: string
//     webViewLink: string
//     webContentLink: string
//   }
  
//   // Configuration
//   const DRIVE_ROOT_FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_FOLDER_ID || ''
//   const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''
//   const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  
//   // Scopes nécessaires
//   const SCOPES = 'https://www.googleapis.com/auth/drive.file'
  
//   // Variable globale pour stocker le token d'accès
//   let accessToken: string | null = null
//   let isInitialized = false
  
//   /**
//    * Initialiser Google API et authentifier l'utilisateur
//    */
//   export async function initGoogleDrive(): Promise<void> {
//     console.log('🔧 [Google Drive] Début initialisation...')
    
//     // Vérifier les variables d'environnement
//     if (!GOOGLE_API_KEY || !GOOGLE_CLIENT_ID || !DRIVE_ROOT_FOLDER_ID) {
//       console.error('❌ [Google Drive] Variables manquantes:', {
//         hasApiKey: !!GOOGLE_API_KEY,
//         hasClientId: !!GOOGLE_CLIENT_ID,
//         hasRootFolder: !!DRIVE_ROOT_FOLDER_ID
//       })
//       throw new Error('Configuration Google Drive incomplète. Vérifiez votre .env.local')
//     }
  
//     // Si déjà initialisé, ne pas réinitialiser
//     if (isInitialized && accessToken) {
//       console.log('✅ [Google Drive] Déjà initialisé')
//       return
//     }
  
//     return new Promise((resolve, reject) => {
//       // Charger la bibliothèque gapi
//       console.log('📦 [Google Drive] Chargement script gapi...')
      
//       // Vérifier si déjà chargé
//       if (window.gapi) {
//         console.log('✅ [Google Drive] Script gapi déjà chargé')
//         loadGapiClient(resolve, reject)
//         return
//       }
  
//       const script = document.createElement('script')
//       script.src = 'https://apis.google.com/js/api.js'
//       script.async = true
//       script.defer = true
      
//       script.onload = () => {
//         console.log('✅ [Google Drive] Script gapi chargé')
//         loadGapiClient(resolve, reject)
//       }
      
//       script.onerror = (error) => {
//         console.error('❌ [Google Drive] Erreur chargement script:', error)
//         reject(new Error('Impossible de charger l\'API Google. Vérifiez votre connexion internet.'))
//       }
      
//       document.body.appendChild(script)
//     })
//   }
  
//   function loadGapiClient(resolve: () => void, reject: (error: Error) => void) {
//     console.log('🔧 [Google Drive] Chargement client gapi...')
    
//     window.gapi.load('client:auth2', async () => {
//       try {
//         console.log('🔧 [Google Drive] Initialisation client...')
        
//         await window.gapi.client.init({
//           apiKey: GOOGLE_API_KEY,
//           clientId: GOOGLE_CLIENT_ID,
//           discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
//           scope: SCOPES,
//         })
  
//         console.log('✅ [Google Drive] Client initialisé')
  
//         // Vérifier si déjà connecté
//         const authInstance = window.gapi.auth2.getAuthInstance()
//         const isSignedIn = authInstance.isSignedIn.get()
  
//         console.log('🔐 [Google Drive] Statut connexion:', isSignedIn ? 'Connecté' : 'Non connecté')
  
//         if (isSignedIn) {
//           // Récupérer le token d'accès
//           const user = authInstance.currentUser.get()
//           accessToken = user.getAuthResponse().access_token
//           isInitialized = true
//           console.log('✅ [Google Drive] Token récupéré (déjà connecté)')
//           resolve()
//         } else {
//           // Demander la connexion
//           console.log('🔐 [Google Drive] Demande de connexion...')
//           try {
//             await authInstance.signIn()
//             const user = authInstance.currentUser.get()
//             accessToken = user.getAuthResponse().access_token
//             isInitialized = true
//             console.log('✅ [Google Drive] Token récupéré (nouvelle connexion)')
//             resolve()
//           } catch (signInError: any) {
//             console.error('❌ [Google Drive] Erreur connexion:', signInError)
//             reject(new Error('Connexion Google annulée ou refusée'))
//           }
//         }
//       } catch (error: any) {
//         console.error('❌ [Google Drive] Erreur initialisation:', error)
//         reject(new Error(`Erreur initialisation Google Drive: ${error.message}`))
//       }
//     })
//   }
  
//   /**
//    * Rechercher un dossier par nom dans un dossier parent
//    */
//   async function findFolder(folderName: string, parentId: string): Promise<string | null> {
//     console.log(`🔍 [Google Drive] Recherche dossier "${folderName}" dans ${parentId}`)
    
//     if (!accessToken) {
//       throw new Error('Not authenticated. Call initGoogleDrive() first.')
//     }
  
//     const query = `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${parentId}' in parents and trashed=false`
  
//     const response = await fetch(
//       `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name)`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     )
  
//     if (!response.ok) {
//       const errorText = await response.text()
//       console.error('❌ [Google Drive] Erreur recherche:', errorText)
//       throw new Error('Failed to search folder')
//     }
  
//     const data = await response.json()
    
//     if (data.files && data.files.length > 0) {
//       console.log(`✅ [Google Drive] Dossier trouvé: ${data.files[0].id}`)
//       return data.files[0].id
//     }
  
//     console.log(`ℹ️ [Google Drive] Dossier non trouvé`)
//     return null
//   }
  
//   /**
//    * Créer un dossier dans Drive
//    */
//   async function createFolder(folderName: string, parentId: string): Promise<string> {
//     console.log(`📁 [Google Drive] Création dossier "${folderName}" dans ${parentId}`)
    
//     if (!accessToken) {
//       throw new Error('Not authenticated. Call initGoogleDrive() first.')
//     }
  
//     const metadata = {
//       name: folderName,
//       mimeType: 'application/vnd.google-apps.folder',
//       parents: [parentId],
//     }
  
//     const response = await fetch('https://www.googleapis.com/drive/v3/files', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(metadata),
//     })
  
//     if (!response.ok) {
//       const errorText = await response.text()
//       console.error('❌ [Google Drive] Erreur création dossier:', errorText)
//       throw new Error('Failed to create folder')
//     }
  
//     const data = await response.json()
//     console.log(`✅ [Google Drive] Dossier créé: ${data.id}`)
//     return data.id
//   }
  
//   /**
//    * Obtenir ou créer le dossier de l'entreprise
//    */
//   export async function getOrCreateCompanyFolder(companyName: string): Promise<string> {
//     console.log(`🏢 [Google Drive] Obtenir/créer dossier entreprise: "${companyName}"`)
    
//     if (!DRIVE_ROOT_FOLDER_ID) {
//       throw new Error('NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_FOLDER_ID is not configured')
//     }
  
//     // Nettoyer le nom de l'entreprise (enlever caractères spéciaux)
//     const cleanCompanyName = companyName.replace(/[/\\?%*:|"<>]/g, '-')
  
//     // Chercher si le dossier existe
//     let folderId = await findFolder(cleanCompanyName, DRIVE_ROOT_FOLDER_ID)
  
//     // Si pas trouvé, créer le dossier
//     if (!folderId) {
//       folderId = await createFolder(cleanCompanyName, DRIVE_ROOT_FOLDER_ID)
//     }
  
//     return folderId
//   }
  
//   /**
//    * Obtenir ou créer un sous-dossier (Rapports ou Analyses)
//    */
//   export async function getOrCreateSubFolder(
//     subFolderName: 'Rapports' | 'Analyses',
//     parentFolderId: string
//   ): Promise<string> {
//     console.log(`📂 [Google Drive] Obtenir/créer sous-dossier: "${subFolderName}"`)
    
//     // Chercher si le sous-dossier existe
//     let folderId = await findFolder(subFolderName, parentFolderId)
  
//     // Si pas trouvé, créer le sous-dossier
//     if (!folderId) {
//       folderId = await createFolder(subFolderName, parentFolderId)
//     }
  
//     return folderId
//   }
  
//   /**
//    * Uploader un fichier dans Google Drive
//    */
//   export async function uploadFileToDrive(
//     fileBlob: Blob,
//     fileName: string,
//     folderId: string,
//     mimeType: string
//   ): Promise<DriveFile> {
//     console.log(`📤 [Google Drive] Upload fichier: "${fileName}"`)
    
//     if (!accessToken) {
//       throw new Error('Not authenticated. Call initGoogleDrive() first.')
//     }
  
//     // Créer les métadonnées du fichier
//     const metadata = {
//       name: fileName,
//       parents: [folderId],
//       mimeType: mimeType,
//     }
  
//     // Créer FormData pour upload multipart
//     const formData = new FormData()
//     formData.append(
//       'metadata',
//       new Blob([JSON.stringify(metadata)], { type: 'application/json' })
//     )
//     formData.append('file', fileBlob)
  
//     // Upload
//     const response = await fetch(
//       'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink,webContentLink',
//       {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: formData,
//       }
//     )
  
//     if (!response.ok) {
//       const errorText = await response.text()
//       console.error('❌ [Google Drive] Erreur upload:', errorText)
//       throw new Error(`Failed to upload file: ${errorText}`)
//     }
  
//     const data = await response.json()
//     console.log(`✅ [Google Drive] Fichier uploadé: ${data.id}`)
  
//     return {
//       id: data.id,
//       name: data.name,
//       webViewLink: data.webViewLink,
//       webContentLink: data.webContentLink,
//     }
//   }
  
//   /**
//    * Fonction principale pour sauvegarder un export dans Drive
//    */
//   export async function saveExportToDrive(
//     fileBlob: Blob,
//     fileName: string,
//     companyName: string,
//     contentType: 'reports' | 'analyses' | 'both' | 'single-report' | 'blockers',
//     fileType: 'excel' | 'pdf'
//   ): Promise<DriveFile> {
//     console.log('🚀 [Google Drive] Début sauvegarde export')
    
//     // 1. Initialiser Google Drive si pas déjà fait
//     if (!accessToken) {
//       console.log('🔧 [Google Drive] Pas de token, initialisation...')
//       await initGoogleDrive()
//     }
  
//     // 2. Obtenir ou créer le dossier de l'entreprise
//     const companyFolderId = await getOrCreateCompanyFolder(companyName)
  
//     // 3. Déterminer le sous-dossier (Rapports ou Analyses)
//     let subFolderName: 'Rapports' | 'Analyses' = 'Rapports'
//     if (contentType === 'analyses') {
//       subFolderName = 'Analyses'
//     }
  
//     // 4. Obtenir ou créer le sous-dossier
//     const subFolderId = await getOrCreateSubFolder(subFolderName, companyFolderId)
  
//     // 5. Déterminer le MIME type
//     const mimeType =
//       fileType === 'excel'
//         ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//         : 'application/pdf'
  
//     // 6. Uploader le fichier
//     const uploadedFile = await uploadFileToDrive(fileBlob, fileName, subFolderId, mimeType)
  
//     console.log('✅ [Google Drive] Sauvegarde terminée')
//     return uploadedFile
//   }
  
//   /**
//    * Déconnecter l'utilisateur de Google Drive
//    */
//   export function signOutGoogleDrive(): void {
//     if (window.gapi && window.gapi.auth2) {
//       const authInstance = window.gapi.auth2.getAuthInstance()
//       if (authInstance) {
//         authInstance.signOut()
//         accessToken = null
//         isInitialized = false
//         console.log('👋 [Google Drive] Déconnexion')
//       }
//     }
//   }







// lib/services/google-drive-service.ts

interface DriveFile {
    id: string
    name: string
    webViewLink: string
    webContentLink: string
  }
  
  // Configuration
  const DRIVE_ROOT_FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_ROOT_FOLDER_ID || ''
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  
  // Scopes nécessaires
  const SCOPES = 'https://www.googleapis.com/auth/drive.file'
  
  // Variable globale pour stocker le token d'accès
  let accessToken: string | null = null
  let tokenClient: any = null
  let gapiInited = false
  let gisInited = false
  
  /**
   * Initialiser GAPI (Google API Client)
   */
  function initGapi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (gapiInited) {
        resolve()
        return
      }
  
      if (!window.gapi) {
        reject(new Error('GAPI script not loaded'))
        return
      }
  
      window.gapi.load('client', async () => {
        try {
          await window.gapi.client.init({
            apiKey: GOOGLE_API_KEY,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
          })
          gapiInited = true
          console.log('✅ [Google Drive] GAPI initialized')
          resolve()
        } catch (error) {
          console.error('❌ [Google Drive] GAPI init error:', error)
          reject(error)
        }
      })
    })
  }
  
  /**
   * Initialiser GIS (Google Identity Services)
   */
  function initGis(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (gisInited) {
        resolve()
        return
      }
  
      if (!window.google || !window.google.accounts) {
        reject(new Error('GIS script not loaded'))
        return
      }
  
      try {
        tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: SCOPES,
          callback: (response: any) => {
            if (response.error) {
              console.error('❌ [Google Drive] Token error:', response.error)
              return
            }
            accessToken = response.access_token
            console.log('✅ [Google Drive] Token obtained')
          },
        })
        gisInited = true
        console.log('✅ [Google Drive] GIS initialized')
        resolve()
      } catch (error) {
        console.error('❌ [Google Drive] GIS init error:', error)
        reject(error)
      }
    })
  }
  
  /**
   * Initialiser Google Drive (GAPI + GIS)
   */
  export async function initGoogleDrive(): Promise<void> {
    console.log('🔧 [Google Drive] Starting initialization...')
  
    // Vérifier les variables d'environnement
    if (!GOOGLE_API_KEY || !GOOGLE_CLIENT_ID || !DRIVE_ROOT_FOLDER_ID) {
      console.error('❌ [Google Drive] Missing config:', {
        hasApiKey: !!GOOGLE_API_KEY,
        hasClientId: !!GOOGLE_CLIENT_ID,
        hasRootFolder: !!DRIVE_ROOT_FOLDER_ID
      })
      throw new Error('Configuration Google Drive incomplète')
    }
  
    // Attendre que les scripts soient chargés
    await waitForScripts()
  
    // Initialiser GAPI et GIS en parallèle
    await Promise.all([initGapi(), initGis()])
  
    console.log('✅ [Google Drive] Initialization complete')
  }
  
  /**
   * Attendre que les scripts Google soient chargés
   */
  function waitForScripts(): Promise<void> {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (window.gapi && window.google && window.google.accounts) {
          clearInterval(checkInterval)
          resolve()
        }
      }, 100)
  
      // Timeout après 10 secondes
      setTimeout(() => {
        clearInterval(checkInterval)
        if (!window.gapi || !window.google) {
          console.error('❌ [Google Drive] Scripts not loaded after 10s')
        }
        resolve()
      }, 10000)
    })
  }
  
  /**
   * Demander un token d'accès à l'utilisateur
   */
  export function requestAccessToken(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!tokenClient) {
        reject(new Error('Token client not initialized'))
        return
      }
  
      // Créer un callback temporaire
      const originalCallback = tokenClient.callback
      tokenClient.callback = (response: any) => {
        tokenClient.callback = originalCallback
        
        if (response.error) {
          reject(new Error(response.error))
          return
        }
  
        accessToken = response.access_token
        console.log('✅ [Google Drive] Access token obtained')
        resolve()
      }
  
      // Demander le token (ouvre la popup Google)
      tokenClient.requestAccessToken({ prompt: '' })
    })
  }
  
  /**
   * Rechercher un dossier par nom dans un dossier parent
   */
  async function findFolder(folderName: string, parentId: string): Promise<string | null> {
    console.log(`🔍 [Google Drive] Searching folder "${folderName}" in ${parentId}`)
    
    if (!accessToken) {
      throw new Error('Not authenticated')
    }
  
    const query = `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${parentId}' in parents and trashed=false`
  
    const response = await window.gapi.client.drive.files.list({
      q: query,
      fields: 'files(id, name)',
      spaces: 'drive',
    })
  
    if (response.result.files && response.result.files.length > 0) {
      console.log(`✅ [Google Drive] Folder found: ${response.result.files[0].id}`)
      return response.result.files[0].id
    }
  
    console.log(`ℹ️ [Google Drive] Folder not found`)
    return null
  }
  
  /**
   * Créer un dossier dans Drive
   */
  async function createFolder(folderName: string, parentId: string): Promise<string> {
    console.log(`📁 [Google Drive] Creating folder "${folderName}" in ${parentId}`)
    
    if (!accessToken) {
      throw new Error('Not authenticated')
    }
  
    const response = await window.gapi.client.drive.files.create({
      resource: {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [parentId],
      },
      fields: 'id',
    })
  
    console.log(`✅ [Google Drive] Folder created: ${response.result.id}`)
    return response.result.id!
  }
  
  /**
   * Obtenir ou créer le dossier de l'entreprise
   */
  export async function getOrCreateCompanyFolder(companyName: string): Promise<string> {
    const cleanCompanyName = companyName.replace(/[/\\?%*:|"<>]/g, '-')
    let folderId = await findFolder(cleanCompanyName, DRIVE_ROOT_FOLDER_ID)
    
    if (!folderId) {
      folderId = await createFolder(cleanCompanyName, DRIVE_ROOT_FOLDER_ID)
    }
    
    return folderId
  }
  
  /**
   * Obtenir ou créer un sous-dossier
   */
  export async function getOrCreateSubFolder(
    subFolderName: 'Rapports' | 'Analyses',
    parentFolderId: string
  ): Promise<string> {
    let folderId = await findFolder(subFolderName, parentFolderId)
    
    if (!folderId) {
      folderId = await createFolder(subFolderName, parentFolderId)
    }
    
    return folderId
  }
  
  /**
   * Uploader un fichier dans Google Drive
   */
  export async function uploadFileToDrive(
    fileBlob: Blob,
    fileName: string,
    folderId: string,
    mimeType: string
  ): Promise<DriveFile> {
    console.log(`📤 [Google Drive] Uploading "${fileName}"`)
    
    if (!accessToken) {
      throw new Error('Not authenticated')
    }
  
    const metadata = {
      name: fileName,
      parents: [folderId],
      mimeType: mimeType,
    }
  
    const formData = new FormData()
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }))
    formData.append('file', fileBlob)
  
    const response = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink,webContentLink',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      }
    )
  
    if (!response.ok) {
      throw new Error('Upload failed')
    }
  
    const data = await response.json()
    console.log(`✅ [Google Drive] File uploaded: ${data.id}`)
  
    return data
  }
  
  /**
   * Fonction principale pour sauvegarder un export
   */
  export async function saveExportToDrive(
    fileBlob: Blob,
    fileName: string,
    companyName: string,
    contentType: 'reports' | 'analyses' | 'both' | 'single-report' | 'blockers',
    fileType: 'excel' | 'pdf'
  ): Promise<DriveFile> {
    console.log('🚀 [Google Drive] Starting save export')
  
    // 1. Initialiser si pas déjà fait
    if (!gapiInited || !gisInited) {
      await initGoogleDrive()
    }
  
    // 2. Demander un token si pas déjà obtenu
    if (!accessToken) {
      await requestAccessToken()
    }
  
    // 3. Créer l'arborescence de dossiers
    const companyFolderId = await getOrCreateCompanyFolder(companyName)
    const subFolderName: 'Rapports' | 'Analyses' = contentType === 'analyses' ? 'Analyses' : 'Rapports'
    const subFolderId = await getOrCreateSubFolder(subFolderName, companyFolderId)
  
    // 4. Déterminer le MIME type
    const mimeType = fileType === 'excel'
      ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      : 'application/pdf'
  
    // 5. Uploader le fichier
    const uploadedFile = await uploadFileToDrive(fileBlob, fileName, subFolderId, mimeType)
  
    console.log('✅ [Google Drive] Save complete')
    return uploadedFile
  }
  
  // Déclarations TypeScript pour window
  declare global {
    interface Window {
      gapi: any
      google: any
    }
  }