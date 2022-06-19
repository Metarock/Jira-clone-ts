import { gql, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';

// queries

const AllTasksQuery = gql`
    query {
        tasks {
            id
            title
            description
            status
        }
    }
`;

const Board = () => {
    const { data, loading, error } = useQuery(AllTasksQuery, {
        onCompleted: (data) => {
            console.log('data: ', data);
        },
    });

    return <div>board</div>;
};

export default Board;
