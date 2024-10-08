import React from "react";

interface RenderCodeSnippetProps {
  currentStep: number;
  selectedAuth?: string;
  email?: string;
  selectedSigner?: string;
}

const RenderCodeSnippet: React.FC<RenderCodeSnippetProps> = ({ currentStep, selectedAuth, email, selectedSigner }) => {
  const renderCodeSnippet = () => {
    switch (currentStep) {
      case 0:
        return `
import { Client } from '@example/sdk'

const client = new Client({
    apiKey: process.env.API_KEY,
    authMethod: '${selectedAuth || "selected_auth_method"}'
})
`;
      case 1:
        return `
// Check for existing user
const existingUser = await client.getUser('${email}')

if (existingUser) {
    // Authenticate existing user
    await client.authenticateUser('${email}')
} else {
    // Create new user
    await client.createUser('${email}')
    // Verify email
    await client.verifyEmail('${email}')
}
`;
      case 2:
        return `
import { ${selectedSigner || "SelectedSigner"} } from '@example/sdk'

const signer = new ${selectedSigner || "SelectedSigner"}()
client.setSigner(signer)
`;
      case 3:
        return `
const transaction = {
    to: '0x1234567890123456789012345678901234567890',
    value: '1000000000000000000', // 1 ETH
    data: '0x',
}

const signature = await client.signTransaction(transaction)
console.log('Signature:', signature)
`;
      case 4:
        return `
// Export session
const exportedSession = await client.exportSession()

// POST to server
await fetch('/api/store-session', {
    method: 'POST',
    body: JSON.stringify({ session: exportedSession }),
})

// Later, on the server:
const importedSession = await client.importSession(exportedSession)
const serverSignature = await importedSession.signMessage('Hello, World!')
`;
      case 5:
        return `
await client.logout()
// Reset client state
`;
      default:
        return "";
    }
  };

  return (
    <pre className="bg-card p-4 rounded-lg overflow-x-auto">
      <code>{renderCodeSnippet()}</code>
    </pre>
  );
};

export default RenderCodeSnippet;
