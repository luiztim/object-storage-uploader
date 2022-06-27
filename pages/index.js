import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { FileUpload } from 'primereact/fileupload';

import "primereact/resources/themes/lara-light-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

const chooseOptions = {label: 'Choose', icon: 'pi pi-fw pi-search'};
const uploadOptions = {label: 'Upload', icon: 'pi pi-upload', className: 'p-button-success'};
const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger'};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uploader</title>
        <meta name="description" content="Uploads files to Cloud Object Storage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
       <h1 className={styles.title}>Object Storage Uploader</h1>
       </div>
       <div>
       <FileUpload name="theFile" url="/api/upload"
        chooseOptions={chooseOptions} 
        uploadOptions={uploadOptions} 
        cancelOptions={cancelOptions}
       ></FileUpload>
       </div>
      </main>

      <footer className={styles.footer}>Powered by P-Tech initiative</footer>
    </div>
  )
}
