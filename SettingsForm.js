import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GENERATE_API_KEY = gql`
mutation generateApiKey {
  generateApiKey {
    apiKey
  }
}
`;

const SAVE_SETTINGS = gql`
mutation saveSettings($input: SaveSettingsInput!) {
  saveSettings(input: $input) {
    fullName
    email
    profilePicture
  }
}
`;

function SettingsForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [apiKey, setApiKey] = useState('');

  const [generateApiKeyMutation] = useMutation(GENERATE_API_KEY, {
    onCompleted: (data) => {
      setApiKey(data.generateApiKey.apiKey);
    },
  });

  const [saveSettingsMutation, { error }] = useMutation(SAVE_SETTINGS, {
    onCompleted: () => {
      console.log('Settings saved successfully!');
    },
  });

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleGenerateApiKey = () => {
    generateApiKeyMutation();
  };

  const handleSave = () => {
    const input = {
      fullName,
      email,
      profilePicture,
    };
    saveSettingsMutation({ variables: { input } });
  };

  return (
    <form className="bg-white p-6 rounded-lg">
      <label className="block font-medium text-lg mb-2">
        Full Name:
        <input
          className="bg-gray-200 p-2 rounded-lg w-full"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Email:
        <input
          className="bg-gray-200 p-2 rounded-lg w-full"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Profile Picture:
        <input
          className="bg-gray-200 p-2 rounded-lg w-full"
          type="file"
          onChange={handleProfilePictureChange}
        />
      </label>
      <button

