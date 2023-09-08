import WorkItem from '../types/WorkItem';

/**
 * Fetching me data from database
 */
export async function fetchMe() {
  // try {
  //   const response = await axios.get('/user?ID=12345');
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }

  // dummy data
  return {
    id: 1,
    name: 'Lisa',
    settings: {
      wordayHours: 8,
      breakIntervalMinutes: 45,
      breakDurationMinutes: 5,
    },
  };
}

/**
 * Fetching last days work items from db
 */
export async function fetchReviewWorkItems() {
  // try {
  //   const response = await axios.get('/user?ID=12345');
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }

  // dummy data
  const data: WorkItem[] = [
    {
      id: 1,
      name: 'Rveiw task 1',
      type: 0,
      description: 'Description for Work Item 1',
      targetTimeStamp: 1693377425,
      state: 0,
    },
    {
      id: 2,
      name: 'Review task 2',
      type: 0,
      description: 'Description for Work Item 2',
      targetTimeStamp: 1693376425,
      state: 1,
    },
    {
      id: 3,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 2,
    },
    {
      id: 4,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 4,
    },
    {
      id: 5,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 4,
    },
    {
      id: 6,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 5,
    },
  ];

  return data;
}

/**
 * Fetching this days work items from db
 */
export async function fetchTodayWorkItems() {
  // try {
  //   const response = await axios.get('/user?ID=12345');
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }

  // dummy data
  const data: WorkItem[] = [
    {
      id: 1,
      name: 'Task 1',
      type: 0,
      description: 'Description for Work Item 1',
      targetTimeStamp: 1693748296,
      state: 0,
    },
    {
      id: 2,
      name: 'Task 2',
      type: 0,
      description: 'Description for Work Item 2',
      targetTimeStamp: 1693748296,
      state: 1,
    },
    {
      id: 3,
      name: 'Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693748296,
      state: 2,
    },
    {
      id: 4,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 2,
    },
    {
      id: 5,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 4,
    },
    {
      id: 6,
      name: 'Review Meeting 1',
      type: 0,
      description: 'Description for Work Item 3',
      targetTimeStamp: 1693374425,
      state: 5,
    },
  ];

  return data;
}
