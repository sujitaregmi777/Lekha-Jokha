// ExpensesGroup.jsx
import { useState, useEffect } from 'react';
import { Users, Plus, UserPlus, Divide, DollarSign, X } from 'lucide-react';

export default function ExpensesGroup() {
    const [groups, setGroups] = useState([]);
    const [newGroupName, setNewGroupName] = useState('');
    const [newMemberUsername, setNewMemberUsername] = useState('');
    const [expenseDescription, setExpenseDescription] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [splitType, setSplitType] = useState('equal');
    const [description, setDescription] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(null);
      const [selectedGroupId, setSelectedGroupId] = useState("");




    useEffect(() => {
        setGroups([
            { id: 1, name: 'Roommates', description: 'Dinner', members: ['Alice', 'Bob', 'You'], creator: 'You', expense: 2000 },
            { id: 2, name: 'Trip to Manali',description: 'All expenses', members: ['You', 'Charlie'], creator: 'Charlie', expense: 50000 },
        ]);
    }, []);

    const handleCreateGroup = (e) => {
        e.preventDefault();
        // console.log("Creating Group:", newGroupName);

    };

    const handleAddMember = (e) => {
        e.preventDefault();
    };

    const handleAddExpense = (e) => {
        e.preventDefault();


        // resetting data
        // setExpenseDescription('');
        // setExpenseAmount('');
        // setSplitType('equal');
        // setIsModalOpen(null);
    };
    // used to show only one group or user selected it 
        const selectedGroup = groups.find(
      (group) => group.id ===  Number(selectedGroupId));




    return (
        <div className="p-6 dark:bg-blue-950 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <Users size={32} /> Group Expense Management
            </h1>

            <div className="flex items-center space-x-4 mb-8">
                <button
                    onClick={() => setIsModalOpen('createGroup')}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    <Plus size={20} className="mr-2" /> Create Group
                </button>
                <>
                    <button
                        onClick={() => setIsModalOpen('addMember')}
                        className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                        <UserPlus size={20} className="mr-2" /> Add Member
                    </button>
                    <button
                        onClick={() => setIsModalOpen('addExpense')}
                        className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        <DollarSign size={20} className="mr-2" /> Add Expense
                    </button>
                </>
            </div>


            <div className="bg-white dark:bg-gray-800 dark:text-white  p-6 rounded-xl shadow-lg">
                <h1 className=' font-bold text-2xl'>Group list:</h1>
                <div className="mt-4 p-4 border rounded-lg border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    *Group transaction list and balances will go here.*
                </div>
                <div>
                    {groups.map(g => (
                        <div
                            key={g.id}
                            className="border-b py-4"
                        >
                            <h3 className="font-bold text-lg">{g.name}</h3>
                            <p>Members: {g.members.length}</p>
                            <p>Expenses: Nrs.{g.expense || "No expenses yet"}</p>
                        </div>
                    ))}
                </div>


            </div>



            {/* === MODALS (Forms) === */}
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(null)}>
                    {isModalOpen === 'createGroup' && (
                        <form onSubmit={handleCreateGroup} className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Group Name</label>
                            <input
                                type="text"
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                                placeholder="e.g., Hiking Club, Roommates"
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>

                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">From(optional)</label>

                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                            />
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">To(optional)</label>

                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"

                            />

                            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                                Create
                            </button>
                        </form>
                    )}

                    {/* 2. Add Member Form */}
                    {isModalOpen === 'addMember' && (
                        <form onSubmit={handleAddMember} className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Member Username</label>
                            <input
                                type="text"
                                value={newMemberUsername}
                                onChange={(e) => setNewMemberUsername(e.target.value)}
                                placeholder="Enter username to invite"
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
                                Add Member
                            </button>
                        </form>
                    )}

                    {/* 3. Add Expense Form (Split Equally/Unequally) */}
                    {isModalOpen === 'addExpense' && (
                        <form onSubmit={handleAddExpense} className="space-y-4">

                            {/* Input Fields */}
                              <select
                                value={selectedGroupId}
                                onChange={(e) => {
                                const id = e.target.value;
                                setSelectedGroupId(id);

                                const group = groups.find(g => g.id === Number(id));
                                if (group) {
                                    setExpenseDescription(group.description);   
                                    setExpenseAmount(group.expense);     
                                }
                                }}
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            >
                                <option value="">-- Select Group --</option>
                                {groups.map((group) => (
                                <option key={group.id} value={group.id}>
                                    {group.name}
                                </option>
                                ))}
                            </select>


                            <input type="text" value={expenseDescription} onChange={e => setExpenseDescription(e.target.value)} placeholder="Description (e.g., Dinner)" className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white" required />
                            <input type="number" value={expenseAmount} onChange={e => setExpenseAmount(e.target.value)} placeholder="Amount (Nrs.)" className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white" required />
                            <input type="date" value={expenseDate} onChange={e => setExpenseDate(e.target.value)} className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white" required />

                            {/* Split Type Toggle */}
                            <div className="flex space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setSplitType('equal')}
                                    className={`flex-1 py-2 rounded-lg font-semibold ${splitType === 'equal' ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    <Divide size={16} className="inline mr-1" /> Split Equally
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSplitType('unequal')}
                                    className={`flex-1 py-2 rounded-lg font-semibold ${splitType === 'unequal' ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    Split Unequally
                                </button>
                            </div>

                            {/* Unequal Split Detail (Conditional Rendering) */}
                            {splitType === 'unequal' && selectedGroup && (
                                <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                    <p className="text-sm font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                                        Manual Split Required:
                                    </p>
                                    {selectedGroup.members.map((member) => (
                                        <div key={member} className="flex justify-between items-center mt-2">
                                            <label className="text-gray-700 dark:text-gray-300">{member} owes:</label>
                                            <input type="number" placeholder="Amount" className="w-1/3 p-1 border rounded-lg dark:bg-gray-700 dark:text-white" />
                                        </div>
                                    ))}
                                    <p className="text-xs mt-2 text-red-500">*Total must equal the expense amount.*</p>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
                                Record Expense
                            </button>
                        </form>
                    )}
                </Modal>
            )}
        </div>
    );
}

const Modal = ({ children, title, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md  relative">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800 dark:text-white">{title}</h3>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                <X size={24} />
            </button>
            {children}
        </div>
    </div>
);