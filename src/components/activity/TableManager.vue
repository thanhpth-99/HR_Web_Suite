<template>
    <div class="table-responsive rounded">
        <table class="table table-bordered m-0">
            <thead >
                <tr class="table-success">
                    <th class="sticky-col border-0" style="min-width: 300px">
                        <div class="search-container" style="position: relative;">
                            <i class="fa-solid fa-magnifying-glass"
                                style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%);"></i>
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"
                                style="padding-left: 30px;" />
                        </div>
                    </th>
                    <th v-for="(day, index) in daysOfMonth" :key="index" class="text-center p-0">
                        <div class="mx-3" style="min-width: 120px">
                            <div class="text_week">{{ day.weekday }}</div>
                            <div class="text_day">{{ day.date }}</div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="sticky-col">
                        <div class="row justify-content-between align-items-center m-0">
                            <img src="@/assets/images/logo.png" class="rounded-circle border border-3 p-0 col-2"
                                style="width: 45px; height: 45px" />
                            <div class="col-8 px-1">
                                <div class="fw-bold">Tên nhân viên</div>
                                <div class="fw-light">Tên nhân viên</div>
                            </div>
                            <div class="col-2 p-0">
                                <div class="text_day text-success">D : 30</div>
                                <div class="text_day text-warning">L : 30</div>
                                <div class="text_day text-danger">O : 30</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-success">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-warning">
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:30:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center text-warning" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>8:35:00</span> 
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="font-size: 14px;">
                           -
                        </div>
                        <div class="d-flex justify-content-center align-items-center text-success" style="font-size: 14px;">
                            <i class="fa-solid fa-user-check me-2"></i> 
                            <span>17:00:00</span> 
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td class="text-danger day_off">
                        <div class="d-flex justify-content-center align-items-center align-items-center">
                            <div>Nghỉ</div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(true)

const daysOfMonth = ref([])

const generateDaysOfMonth = () => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i)
        daysOfMonth.value.push({
            date: `${String(i).padStart(2, '0')}/${String(currentMonth + 1).padStart(2, '0')}`,
            weekday: weekdays[date.getDay()],
        })
    }
}

generateDaysOfMonth()
</script>

<style scoped>
.text_day {
    font-weight: normal;
    font-size: 14px;
}

.text_week {
    font-size: 18px;
}

.calendar-row-container {
    white-space: nowrap;
}

.sticky-col {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 10;
}

::-webkit-scrollbar {
    display: hidden;
}

td.day_off {
   text-align: center; 
   vertical-align: middle;
}

td.day_off div{
    font-size: 16px; 
    height: 100%;
    font-weight: bold;
}

/* Tùy chỉnh cho thanh cuộn */
::-webkit-scrollbar {
    height: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background-color: transparent; /* Màu nền của track (ẩn đi) */
}

::-webkit-scrollbar-button {
    display: none; /* Ẩn các nút ở hai đầu */
}

.fa-user-check {
    font-size: 14px;
}
</style>