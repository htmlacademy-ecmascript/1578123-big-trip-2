import { getBasePrice, getRandomArrayElement } from '../utils.js';

const points = [
  {
    'id': 'fbbb710f-e9ba-4df7-b642-59d2b1065d63',
    'base_price': getBasePrice(),
    'date_from': '2025-08-29T06:35:16.678Z',
    'date_to': '2025-08-31T02:43:16.678Z',
    'destination': '8bb98cf5-d4a1-4538-b183-c38eace43fb0',
    'is_favorite': false,
    'offers': [
      '4d79958c-50ed-4ba5-9b4a-ce5dc1255b6c',
      '15b7935d-31d4-406d-9393-3b7c8bf03f97'
    ],
    'type': 'bus'
  },
  {
    'id': '49c7f3f1-732f-4cac-870a-682cb5fd745e',
    'base_price': getBasePrice(),
    'date_from': '2025-09-01T22:34:16.678Z',
    'date_to': '2025-09-03T07:51:16.678Z',
    'destination': '8bb98cf5-d4a1-4538-b183-c38eace43fb0',
    'is_favorite': true,
    'offers': [
      '5a880b9c-a8d5-4bef-b891-0838d38a93ee',
      '5d9d2d88-29db-4fc5-8e9b-369246cae5fc'
    ],
    'type': 'restaurant'
  },
  {
    'id': '8facc1e4-168a-4209-8ed2-b44c08355bd2',
    'base_price': getBasePrice(),
    'date_from': '2025-09-04T05:50:16.678Z',
    'date_to': '2025-09-05T11:02:16.678Z',
    'destination': '50efe481-179b-4d60-86c1-6c6fd96723ba',
    'is_favorite': true,
    'offers': [
      'ec2a967f-305d-4992-a476-d4f265c2f11d',
      '81b31652-5db5-4a0e-b0d1-37e637a29f33',
      'ff1452e3-2a47-4193-a769-c499ad50c74a',
      '6c89f4af-5a55-4ca1-81d0-d9ff90988538'
    ],
    'type': 'taxi'
  },
  {
    'id': 'f733195f-0094-4ca8-8a0a-a81817e9e394',
    'base_price': getBasePrice(),
    'date_from': '2025-09-07T07:54:16.678Z',
    'date_to': '2025-09-08T19:38:16.678Z',
    'destination': 'b22f9c41-fed8-4841-bf65-2e073e839837',
    'is_favorite': true,
    'offers': [
      '010ff0df-2548-4e68-a542-e7fbc2fcd1e3',
      '3a0a66c0-1439-46ef-924e-1bfa3a7f2650'
    ],
    'type': 'train'
  },
  {
    'id': 'c6bacba4-3f74-4b5e-ab06-0bb163b2637d',
    'base_price': getBasePrice(),
    'date_from': '2025-09-10T05:05:16.678Z',
    'date_to': '2025-09-11T04:35:16.678Z',
    'destination': '50efe481-179b-4d60-86c1-6c6fd96723ba',
    'is_favorite': true,
    'offers': [
      'f3ff3aed-07f9-43cd-a280-0d4440207b6d',
      '010ff0df-2548-4e68-a542-e7fbc2fcd1e3',
      '3a0a66c0-1439-46ef-924e-1bfa3a7f2650'
    ],
    'type': 'train'
  },
  {
    'id': '98bf79fe-7dae-4639-9cb6-922cbd6f096d',
    'base_price': getBasePrice(),
    'date_from': '2025-09-11T23:28:16.678Z',
    'date_to': '2025-09-12T13:42:16.678Z',
    'destination': '68ab1942-657f-4010-90f2-d6e0f3514cda',
    'is_favorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '08c1b51d-55d3-4006-bec4-7c6409f2866a',
    'base_price': getBasePrice(),
    'date_from': '2025-09-12T19:57:16.678Z',
    'date_to': '2025-09-13T15:08:16.678Z',
    'destination': 'c021da8a-1fed-4b32-9947-468a6582d94d',
    'is_favorite': false,
    'offers': [],
    'type': 'flight'
  },
  {
    'id': 'd562b096-de65-4937-8bf0-b7462aa30aa8',
    'base_price': getBasePrice(),
    'date_from': '2025-09-13T21:35:16.678Z',
    'date_to': '2025-09-14T11:23:16.678Z',
    'destination': 'a458d528-e300-4397-a5be-8b49fdfb4f91',
    'is_favorite': true,
    'offers': ['5d9d2d88-29db-4fc5-8e9b-369246cae5fc'],
    'type': 'restaurant'
  },
  {
    'id': '180d918d-b323-457f-b8b0-d72d4e1dec23',
    'base_price': getBasePrice(),
    'date_from': '2025-09-15T19:44:16.678Z',
    'date_to': '2025-09-16T18:13:16.678Z',
    'destination': '8d7cd59b-92de-4e29-8999-0fa581a85e12',
    'is_favorite': true,
    'offers': [
      '8b29d286-d441-4e35-a30e-6e2593f3d9a7',
      '61211877-8a71-4de9-8499-ba235d31f5a5',
      '8a2833eb-69eb-47fe-82dc-b103e8fd432a',
      'd7714fcf-b6bb-414b-b124-dfa1592f0a9b'
    ],
    'type': 'flight'
  },
  {
    'id': '4739ab1b-8e65-4784-94ea-ad5692576015',
    'base_price': getBasePrice(),
    'date_from': '2025-09-18T02:54:16.678Z',
    'date_to': '2025-09-19T17:01:16.678Z',
    'destination': '50efe481-179b-4d60-86c1-6c6fd96723ba',
    'is_favorite': true,
    'offers': [],
    'type': 'ship'
  },
  {
    'id': '5de58cd6-d761-43fd-9541-16303d1e34ef',
    'base_price': getBasePrice(),
    'date_from': '2025-09-20T23:03:16.678Z',
    'date_to': '2025-09-22T05:56:16.678Z',
    'destination': '8bb98cf5-d4a1-4538-b183-c38eace43fb0',
    'is_favorite': false,
    'offers': ['5d9d2d88-29db-4fc5-8e9b-369246cae5fc'],
    'type': 'restaurant'
  },
  {
    'id': 'b6beaa02-a61e-4b00-a601-396b0c8afa32',
    'base_price': getBasePrice(),
    'date_from': '2025-09-24T01:54:16.678Z',
    'date_to': '2025-09-24T11:07:16.678Z',
    'destination': '8d7cd59b-92de-4e29-8999-0fa581a85e12',
    'is_favorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '4468fc4f-ce05-4516-888a-9dc5e72b2434',
    'base_price': getBasePrice(),
    'date_from': '2025-09-26T02:36:16.678Z',
    'date_to': '2025-09-26T12:16:16.678Z',
    'destination': 'f46e01f8-7412-4980-b074-a2fb6004c930',
    'is_favorite': false,
    'offers': ['d7714fcf-b6bb-414b-b124-dfa1592f0a9b'],
    'type': 'flight'
  },
  {
    'id': 'bd10ff33-b9b6-4bd1-886b-14dfa1ddaa60',
    'base_price': getBasePrice(),
    'date_from': '2025-09-27T15:39:16.678Z',
    'date_to': '2025-09-28T10:30:16.678Z',
    'destination': '3add2e2b-2c76-4205-b7a2-ff8fc0d198cc',
    'is_favorite': true,
    'offers': ['15b7935d-31d4-406d-9393-3b7c8bf03f97'],
    'type': 'bus'
  },
  {
    'id': 'c236970b-e7f6-4233-8646-8000991631dc',
    'base_price': getBasePrice(),
    'date_from': '2025-09-29T00:50:16.678Z',
    'date_to': '2025-09-30T14:57:16.678Z',
    'destination': '50efe481-179b-4d60-86c1-6c6fd96723ba',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '5ba8608b-aa55-431d-8c12-7635e16ee9cb',
    'base_price': getBasePrice(),
    'date_from': '2025-10-02T15:34:16.678Z',
    'date_to': '2025-10-03T20:36:16.678Z',
    'destination': '8d7cd59b-92de-4e29-8999-0fa581a85e12',
    'is_favorite': true,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': '1b01d689-420b-4b0e-a336-9abef216666c',
    'base_price': getBasePrice(),
    'date_from': '2025-10-04T03:04:16.678Z',
    'date_to': '2025-10-06T01:16:16.678Z',
    'destination': 'f46e01f8-7412-4980-b074-a2fb6004c930',
    'is_favorite': false,
    'offers': [
      '130b1508-a5bf-43de-a320-5ed08e87129c',
      '452e1178-549e-43a3-a723-3f59bb22e09d',
      'ffa43f4f-2b08-4609-bee5-2185a0da279a',
      '29bfe58a-c8d0-413c-9c5e-111ef624c2f9'
    ],
    'type': 'check-in'
  },
  {
    'id': 'dff00c65-f8fe-47c9-8f6c-06fa7a14069f',
    'base_price': getBasePrice(),
    'date_from': '2025-10-07T02:00:16.678Z',
    'date_to': '2025-10-08T02:35:16.678Z',
    'destination': '8bb98cf5-d4a1-4538-b183-c38eace43fb0',
    'is_favorite': true,
    'offers': [
      '5d2b5d49-6050-466e-8b40-b2db1aa115e3',
      'ec2a967f-305d-4992-a476-d4f265c2f11d',
      '81b31652-5db5-4a0e-b0d1-37e637a29f33',
      'ff1452e3-2a47-4193-a769-c499ad50c74a',
      '6c89f4af-5a55-4ca1-81d0-d9ff90988538'
    ],
    'type': 'taxi'
  },
  {
    'id': '85d6b6ee-73ee-4906-975f-13dfc00cb3e4',
    'base_price': getBasePrice(),
    'date_from': '2025-10-08T18:00:16.678Z',
    'date_to': '2025-10-09T09:56:16.678Z',
    'destination': 'b22f9c41-fed8-4841-bf65-2e073e839837',
    'is_favorite': true,
    'offers': ['5d9d2d88-29db-4fc5-8e9b-369246cae5fc'],
    'type': 'restaurant'
  },
  {
    'id': 'cad857d9-53f6-45ae-a430-cca87e5d286d',
    'base_price': getBasePrice(),
    'date_from': '2025-10-10T21:29:16.678Z',
    'date_to': '2025-10-11T11:17:16.678Z',
    'destination': 'f46e01f8-7412-4980-b074-a2fb6004c930',
    'is_favorite': false,
    'offers': [
      '8dc45870-c270-462f-9f22-1034f93f0ffd',
      '259ea35d-8e1b-47fb-83e8-fc59eb4f06e9'
    ],
    'type': 'ship'
  },
  {
    'id': '26e9483b-e173-48b4-98fc-a5351370acef',
    'base_price': getBasePrice(),
    'date_from': '2025-10-12T16:28:16.678Z',
    'date_to': '2025-10-12T22:47:16.678Z',
    'destination': 'c021da8a-1fed-4b32-9947-468a6582d94d',
    'is_favorite': false,
    'offers': [
      '4d79958c-50ed-4ba5-9b4a-ce5dc1255b6c',
      '15b7935d-31d4-406d-9393-3b7c8bf03f97'
    ],
    'type': 'bus'
  },
  {
    'id': 'e8774de4-9f45-4842-a071-bab91c1f8ee4',
    'base_price': getBasePrice(),
    'date_from': '2025-10-13T07:48:16.678Z',
    'date_to': '2025-10-13T13:52:16.678Z',
    'destination': '8d7cd59b-92de-4e29-8999-0fa581a85e12',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'b9e46a61-f24e-49a1-811a-ad38de023999',
    'base_price': getBasePrice(),
    'date_from': '2025-10-15T10:23:16.678Z',
    'date_to': '2025-10-15T21:03:16.678Z',
    'destination': '8d7cd59b-92de-4e29-8999-0fa581a85e12',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'eaced182-ac3d-4c05-a5da-d38e4eac52c2',
    'base_price': getBasePrice(),
    'date_from': '2025-10-17T09:47:16.678Z',
    'date_to': '2025-10-18T11:11:16.678Z',
    'destination': '6cd9a7d2-c511-4bea-8d2f-d643aeab26ec',
    'is_favorite': false,
    'offers': [
      '130b1508-a5bf-43de-a320-5ed08e87129c',
      '452e1178-549e-43a3-a723-3f59bb22e09d',
      'ffa43f4f-2b08-4609-bee5-2185a0da279a',
      '29bfe58a-c8d0-413c-9c5e-111ef624c2f9'
    ],
    'type': 'check-in'
  },
  {
    'id': '124e9e31-ff6f-40b4-984f-b964b60c188e',
    'base_price': getBasePrice(),
    'date_from': '2025-10-19T14:49:16.678Z',
    'date_to': '2025-10-20T19:02:16.678Z',
    'destination': '6cd9a7d2-c511-4bea-8d2f-d643aeab26ec',
    'is_favorite': true,
    'offers': ['9e3e4aff-52f0-4a1c-a1ed-c6894b9d2915'],
    'type': 'drive'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(points);
}

export { getRandomPoint };
