import React from 'react'
import { icons } from '../../../../../constants'
import SelectInput from '../../../../../components/core/form/SelectInput'
import Button from '../../../../../components/core/form/Button'

const AdminUsersFilters = () => {
    return (
        <div className="fileManagerFiltersContainer">
            <div className="fileManagerFilters">
                <div className="fileManagerFiltersLayout">
                    <div className="fileManagerFiltersLayoutIcon">
                        <i className={`${icons.list} fileManagerFiltersLayoutIco`}></i>
                    </div>
                    <div className="fileManagerFiltersLayoutIcon">
                        <i className={`${icons.grid} fileManagerFiltersLayoutIco active`}></i>
                    </div>
                </div>

                <div className="fileManagerFiltersMain">
                    <div className="fileManagerFilterSingle">
                        <SelectInput hasLable={false}>
                            <select className="cmsFormStepInputSelect">
                                <option>Recent Login</option>
                            </select>
                        </SelectInput>
                    </div>
                    <div className="fileManagerFilterSingle">
                        <SelectInput hasLable={false}>
                            <select className="cmsFormStepInputSelect">
                                <option>Created On</option>
                            </select>
                        </SelectInput>
                    </div>
                    <div className="fileManagerFilterSingle">
                        <SelectInput hasLable={false}>
                            <select className="cmsFormStepInputSelect">
                                <option>Created By</option>
                            </select>
                        </SelectInput>
                    </div>
                </div>
            </div>

            <div className="fileManagerFiltersAction">
                <Button 
                    type="button"
                    bgType="fill"
                    width="auto"
                    bg="primary"
                    borderRadius="full"
                    hasIcon={true}
                    iconPosition="left"
                    icon={icons.refresh}
                >
                    Refresh
                </Button>
            </div>
        </div>
    )
}

export default AdminUsersFilters