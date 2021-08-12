<script>
	import { firebaseApp } from './firebase'
	import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';


	const db = getFirestore(firebaseApp);
	
	let data = [];
	$: console.log(data)

	async function getData() {

		/* PETICIÓN A COLECCIONES */
			const col = collection(db, "users");
			const querySnapshot = await getDocs(col);
				data = querySnapshot.docs

		/* PETICIÓN A DOCUMENTOS ESPECÍFICOS */
			const docREF = doc(db, 'users/7JfXt85QrggYlVFLlb75');
			const snapshot = await getDoc(docREF);
				console.log(snapshot.data())

	}

	getData()



	/* const snapshot = await getDocs(collection('users')); */
	  /*  */
</script>

<h1>Hello World</h1>
