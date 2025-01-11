// Correct asynchronous handling using async/await
async function getData(docRef) {
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log("Data:", data.someField);
      return data;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null; // or throw error depending on desired error handling
  }
}

// Example usage
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log("Data1:", doc.data().someField)
});

// Using async/await (correct way)
getData(db.collection('myCollection').doc('myDoc'))
  .then(data => console.log("Data2:", data));