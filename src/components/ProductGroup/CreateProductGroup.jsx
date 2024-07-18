import { useState } from 'react'; // useState'i import et
import { createProductGroup } from '../../services/ApiService'; // API servisinden fonksiyonu import et

const CreateProductGroup = () => {
    const [groupName, setGroupName] = useState(''); // State yönetimi

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGroup = { name: groupName }; // Yeni ürün grubu objesi oluþtur
        try {
            await createProductGroup(newGroup); // API çaðrýsý
            setGroupName(''); // Formu temizle
        } catch (error) {
            console.error("Ürün grubu oluþturulurken hata oluþtu:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Product Group</h2>
            <input
                type="text"
                placeholder="Product Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)} // Input deðiþimi
                required
            />
            <button type="submit">Create</button> {/* Buton */}
        </form>
    );
};

export default CreateProductGroup;
