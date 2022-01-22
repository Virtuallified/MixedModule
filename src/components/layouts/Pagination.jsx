import React, { forwardRef } from 'react'
import MaterialTable from 'material-table';
import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';
import { Container } from '@material-ui/core';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    { title: "ID", field: "id" },
    { title: "PostId", field: "postId" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Comments", field: "body" },
]

export default function Pagination() {
    return (
        <>
            <div>
                <Container maxWidth="lg">
                    <p style={{ textAlign: "center" }}>Server Side Pagination, Filtering, Search & Sorting with Material Table</p>
                    <MaterialTable
                        // other props
                        title="All User Comments"
                        columns={columns}
                        icons={tableIcons}
                        options={{ debounceInterval: 700, padding: "dense", filtering: true }}
                        data={query =>
                            new Promise((resolve, reject) => {
                                console.log(query)
                                // prepare your data and then call resolve like this:
                                let url = "https://jsonplaceholder.typicode.com/comments?"
                                // searching
                                if (query.search) {
                                    url += `q=${query.search}`
                                }
                                // sorting
                                if (query.orderBy) {
                                    url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
                                }
                                // filtering
                                if (query.filters.length) {
                                    const filter = query.filters.map(filter => {
                                        return `&${filter.column.field}${filter.operator}${filter.value}`
                                    })
                                    url += filter.join('')
                                }
                                url += `&_page=${query.page + 1}`
                                url += `&_limit=${query.pageSize}`
                                fetch(url).then(res => res.json()).then(res => {
                                    resolve({
                                        data: res, // your data array
                                        page: query.page, // current page number
                                        totalCount: 500 // total row number
                                    });
                                })
                            })
                        }
                    />;
                </Container>
            </div>
        </>
    )
}
