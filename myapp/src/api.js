export const saveBuild = async (build) => {
    await fetch('http://localhost:8080/api/carbuilds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(build)
    });
  };
  